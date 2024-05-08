// Добавляем обработчик события 'DOMContentLoaded', который будет выполняться, когда весь HTML будет полностью загружен 
document.addEventListener('DOMContentLoaded', (event) => {

    // Запрашиваем файл 'Catalog.xml' с сервера
    fetch('/Catalog.xml')
    .then(response => response.text()) // Преобразуем ответ в текст
    .then(str => new window.DOMParser().parseFromString(str, "text/xml")) // Преобразуем текст в XML документ
    .then(data => { // Обрабатываем полученные данные
      console.log(data); // Выводим данные в консоль для отладки
    
        const loadDataXml = () => { // Функция для загрузки данных из XML

            let catalog = data.getElementsByTagName('catalog')[0]; // Получаем элемент 'catalog'
            let items = catalog.children; // Получаем дочерние элементы 'catalog'
            let conatiner = document.querySelector('.Container'); // Получаем контейнер, в который будем добавлять элементы

            // Проходим по всем элементам 'items'
            for(let i = 0; i < items.length; i++) {

                let item = items[i]; // Текущий элемент
                // Получаем данные из текущего элемента
                let image = item.getElementsByTagName("image")[0].textContent;
                let name = item.getElementsByTagName("name")[0].textContent;
                let text = item.getElementsByTagName("text")[0].textContent;
                let productBtn = item.getElementsByTagName("product-btn")[0].textContent;
            
                // Создаем контейнер для товара
                let itemContainer = document.createElement('div');
                itemContainer.classList.add('Item');
                conatiner.appendChild(itemContainer);
                
                // Создаем элемент изображения
                let imageHTML = document.createElement('img');
                imageHTML.src = image;
                // Если индекс элемента четный, добавляем изображение в начало контейнера
                if(i % 2 == 0){
                    itemContainer.append(imageHTML);
                }

                // Создаем заголовок товара
                let title = document.createElement('h4');
                title.classList.add('product-title');
                title.textContent = name;  

                // Создаем описание товара
                let info = document.createElement('p');
                info.classList.add('prodct-info');
                info.textContent = text;

                // Создаем ссылку на товар
                let link = document.createElement('a');
                link.classList.add('Details_Button');
                link.href = productBtn;
                link.innerText = 'Перейти к выбору'

                // Создаем контейнер для информации о товаре
                let infoContainer = document.createElement('div');
                infoContainer.classList.add('Item-inner');
                infoContainer.appendChild(title);
                infoContainer.appendChild(info);
                infoContainer.appendChild(link);

                // Добавляем контейнер с информацией в контейнер товара
                itemContainer.appendChild(infoContainer);

                // Если индекс элемента нечетный, добавляем изображение в конец контейнера
                if(i % 2 != 0){
                    itemContainer.append(imageHTML);
                }
            }

        }            
        loadDataXml(); // Вызываем функцию загрузки данных
    });
});
