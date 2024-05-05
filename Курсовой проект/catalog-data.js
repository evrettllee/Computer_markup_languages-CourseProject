// Подгрузка данных из xml
document.addEventListener('DOMContentLoaded', (event) => {

    fetch('/Catalog.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      console.log(data);
    
        const loadDataXml = () => {

            let catalog = data.getElementsByTagName('catalog')[0];
            let items = catalog.children;
            let conatiner = document.querySelector('.Container');

            for(let i = 0; i < items.length; i++) {

                let item = items[i];
                let image = item.getElementsByTagName("image")[0].textContent;
                let name = item.getElementsByTagName("name")[0].textContent;
                let text = item.getElementsByTagName("text")[0].textContent;
                let productBtn = item.getElementsByTagName("product-btn")[0].textContent;
            
                let itemContainer = document.createElement('div');
                itemContainer.classList.add('Item');
                conatiner.appendChild(itemContainer);
                
                let imageHTML = document.createElement('img');
                imageHTML.src = image;
                if(i % 2 == 0){
                    itemContainer.append(imageHTML);
                }

                let title = document.createElement('h4');
                title.classList.add('product-title');
                title.textContent = name;  

                let info = document.createElement('p');
                info.classList.add('prodct-info');
                info.textContent = text;

                let link = document.createElement('a');
                link.classList.add('Details_Button');
                link.href = productBtn;
                link.innerText = 'Перейти к выбору'

                let infoContainer = document.createElement('div');
                infoContainer.classList.add('Item-inner');
                infoContainer.appendChild(title);
                infoContainer.appendChild(info);
                infoContainer.appendChild(link);

                itemContainer.appendChild(infoContainer);

                if(i % 2 != 0){
                    itemContainer.append(imageHTML);
                }
            }

        }            
        loadDataXml();
    });
});