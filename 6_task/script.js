import { fakeTranslate } from './fakeTranslate.js'; //импортируем метод из fakeTranslate.js
let favorites = [];
// Функция для перевода слова с использованием fakeTranslate
async function translateWord() {
    const word = document.getElementById("wordInput").value.trim();
    if (!word) {
        alert("Введите слово для перевода.");
        return;
    }
    try {
        const translation = await fakeTranslate(word); // Используем fakeTranslate
        document.getElementById("translationResult").innerText = translation;
        document.getElementById("saveButton").disabled = false;// Разблокировываем кнопку сохранения
    } catch (error) {
        document.getElementById("translationResult").innerText = error; // Здесь мы показываем сообщение об ошибке
        document.getElementById("saveButton").disabled = true; // Здесь мы заблокировываем кнопку сохранения, если слово нет в словаре 
        
    }
}
// Сохранение перевода в избранное
function saveTranslation() {
    const word = document.getElementById("wordInput").value.trim();
    const translation = document.getElementById("translationResult").innerText;

    if (!word || !translation) return;

    favorites.push({ word, translation });
    updateFavorites();
    document.getElementById("saveButton").disabled = true;

    alert(`Сохранено: ${word} - ${translation}`);
}

function updateFavorites() {
    const favoritesList = document.getElementById("favoritesList");
    favoritesList.innerHTML = ""; // Очистить список

    if (favorites.length === 0) {
        const message = document.createElement("li");
        message.innerText = "Нет избранных переводов.";
        favoritesList.appendChild(message);
    } else {
        favorites.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.innerText = `${item.word} - ${item.translation}`;
            
            const removeButton = document.createElement("button");
            removeButton.innerText = "Удалить";
            removeButton.addEventListener("click", () => removeFavorite(index));
            
            listItem.appendChild(removeButton);
            favoritesList.appendChild(listItem);
        });
    }
}

// Удаление перевода из избранного
function removeFavorite(index) {
    favorites.splice(index, 1);  // Удаляем элемент из массива
    updateFavorites();
    alert("Перевод удален из избранного.");
}

// Обработчики событий для кнопок
document.getElementById("translateButton").addEventListener("click", translateWord); // При нажатии на кнопку "Перевести"/"translateButton" активируем метод translateWord() 
document.getElementById("saveButton").addEventListener("click", saveTranslation); // При нажатии на кнопку "Сохранить в избранное"/""saveButton"" активируем метод saveTranslation()
