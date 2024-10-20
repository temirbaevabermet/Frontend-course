const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const allItemsBtn = document.getElementById('filter-all');
const purchasedItemsBtn = document.getElementById('filter-purchased');
const unpurchasedItemsBtn = document.getElementById('filter-unpurchased');

const items = [];
addItemBtn.addEventListener('click', function() {
    const itemName = itemInput.value.trim(); // Получаем текст из input

    if (itemName !== "") {
        const newItem = {
            name: itemName,
            purchased: false
        };

        items.push(newItem);

        const li = document.createElement('li');
        li.textContent = itemName;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', function() {
            itemList.removeChild(li.nextSibling)
        });

        li.appendChild(deleteBtn);

        itemInput.value = "";
    } else {
        alert("Please enter an item name.");
    }
});

function renderItems(filter = 'all') {
    itemList.innerHTML = ''; // Очищаем текущий список
    const filteredList = items.filter(item => {
        if (filter === 'purchased') return item.purchased; //Здесь мы возвращаем купленные товары, оно будет отображаться в отделе "Purchased" и "All"
        if (filter === 'unpurchased') return !item.purchased;// А здесь мы возвращаем некупленные товары, оно будет отображаться в отделе "Unpurchased" и "All"
        return true;
    });
    filteredList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.purchased) li.classList.add('purchased'); //Здесь мы призываем метод в CSS который зачеркивает продукт зеленой линией, если мы нажмем на кнопку "Purchase" 
        
        const purchaseBtn = document.createElement('button'); //Создаем кнопку "Purchase/Unpurchase" чтобы было удобнее сортировать
        purchaseBtn.textContent = item.purchased ? 'Unpurchase' : 'Purchase';
        purchaseBtn.addEventListener('click', function() {
            item.purchased = !item.purchased; //Здесь мы меняем название кнопки на "Unpurchase" при нажатии на кнопку "Purchase", таким же образом и наоборот
            renderItems(items); // Обновляем отображение списка
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            items.splice(items.indexOf(item), 1); // Удаляем элемент из массива
            renderItems(items); // Обновляем отображение списка
        });

        
        li.appendChild(purchaseBtn);
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
        
        
    });
}
allItemsBtn.addEventListener('click', () => renderItems('all'));
purchasedItemsBtn.addEventListener('click', () => renderItems('purchased'));
unpurchasedItemsBtn.addEventListener('click', () => renderItems('unpurchased'));

