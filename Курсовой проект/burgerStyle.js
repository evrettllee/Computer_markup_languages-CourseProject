// получаем элемент section
// тут мы обращаемся к документ то есть странице нашей
// и получаем элемент через тег
// проверка на то, открыт бургер или нет
let isBurgerOpen = false;
let burgerElement = document.querySelector('.burger-checkbox');
// тут добавляем событие с помощью метода addEventListener: что будет происходить при нажатии на бургер
burgerElement.addEventListener('click', function(){
    isBurgerOpen = !isBurgerOpen;
    updateStyle(); // вызов функции по апдейту стиля для всей секции
});
function updateStyle(){
    let sectionElement = document.querySelector('section'); 
    if(isBurgerOpen){
        sectionElement.style.marginTop = '266px';
    }
    else{
        sectionElement.style.marginTop = '0px';
    }
}