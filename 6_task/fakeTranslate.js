// Объект dictionary для хранения переводов
const dictionary = {
    "hello": "здравствуйте",
    "world": "мир",
    "friend": "друг",
    "good": "хорошо",
    "day": "день",
    "night": "ночь",
    "love": "любовь",
    "peace": "мир",
    "cat": "кот",
    "dog": "собака",
    "water": "вода",
    "fire": "огонь",
    "earth": "земля",
    "wind": "ветер",
    "sun": "солнце",
    "moon": "луна",
    "tree": "дерево",
    "flower": "цветок",
    "book": "книга",
    "computer": "компьютер"
};

function fakeTranslate(word) {
    return new Promise((resolve, reject) => {
        // Имитация асинхронной операции с задержкой
        setTimeout(() => {
            if (dictionary[word]) {    //Проверяет есть ли слово в словаре
                resolve(dictionary[word]);
            } else {
                reject(`Перевод для слова "${word}" не найден.`); 
            }
        }, 1000); // Задержка 1 секунда
    });
}

export { fakeTranslate }; // Экспортируем метод fakeTranslate чтобы использовать его уже в другом классе "script.js"

