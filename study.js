'use strict';

const sweet = document.querySelector('#sweeties');
const menu = document.querySelector('#menu');
const taskList = document.querySelector('#task-list');
// const carousel = document.querySelector('#carousel');
// const uls = carousel.querySelector('ul');
// const lis = carousel.querySelectorAll('li');
const animals = document.querySelector('#animals');

function openCloseMenu(element) {
    const lis = element.querySelectorAll('li');
    for (let li of lis) {
        const span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
    }
    element.addEventListener('click', (evt) => {
        if (evt.target.tagName !== 'SPAN') return;
        const childrenContainer = evt.target.parentNode.querySelector('ul');
        if (!childrenContainer) return; // нет детей
        childrenContainer.hidden = !childrenContainer.hidden;
    });
}

const removeTaskOnList = function(taskList) {
    taskList.addEventListener('click', (evt) => {
       const targetElem = evt.target;
       if(targetElem.className !== 'remove-button') return;
       targetElem.parentNode.remove();
    });
};

function moveCarousel(uls, lis){
    let width = 130; // ширина картинки
    let count = 3; // видимое количество изображений
    let position = 0; // положение ленты прокрутки
    let i = 0;
    for (const li of lis){
        li.style.position = 'relative';
        li.style.display = 'inline-block';
        // li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
        i++;
    }

    carousel.querySelector('.prev').addEventListener('click', () => {
        position += width * count;
        position = Math.min(position, 0);
        uls.style.marginLeft = position + 'px';
    });

    carousel.querySelector('.next').addEventListener('click', () =>  {
        position -= width * count;
        position = Math.max(position, -width * (lis.length - count));
        uls.style.marginLeft = position + 'px';
    });
}

class Menu {
    // elem в данном случае - это контейнер элементов, над которыми вешается слушатель, работает принцип всплытия
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this); // (*)
    }
    save() {
        alert('сохраняю');
    }
    load() {
        alert('загружаю');
    }
    search() {
        alert('ищу');
    }
    onClick(event) {
        // action в данном случае будет имя метода, а dataset.action - приходит из html атрибута data-action
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}

function incrementCounter(){
    document.addEventListener('click', (evt) => {
       if(evt.target.dataset.counter !== undefined) {
           evt.target.value++;
       }
    });
}

new Menu(menu);
// moveCarousel(uls, lis);
removeTaskOnList(taskList);
openCloseMenu(sweet);
openCloseMenu(animals);
incrementCounter();

function loadJson(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.log(`Ресурс ${url} недоступен или указан неверно: ${error.message}`);
            alert(`Ресурс ${url} недоступен или указан неверно: ${error.message}`);
        });
}

function getResponseResult(json){
    new Promise((resolve, reject) => {
        resolve(json);
        reject(new Error("hdgsfkuhvbkd"));
    });
}

const getJsonData = function(url, filter, getResponseResult) {
    return loadJson(url)
        .then((json) => filter(json))
        .then(arr => getResponseResult(arr))
        .catch(error => {
            console.log(error.message);
            alert(error.message);
        });
};

function fillTextWindow(){

    const text = document.querySelector('#content-text');
    const btn = document.querySelector("#over-height-div");
    text.style.cssText = 'width: 300px; height: 200px; border: 25px solid #E8C48F; padding: 20px; overflow: auto; left: 180px; top: 180px';
    text.style.color = 'rgb(200,100,100)';

    btn.addEventListener('click', (evt) => {
        /**
         * evt - объект-событие, к которому можно обратиться после соверш. соб., чтобы, например, получить координаты
         * нажатия на кнопку. (evt.clientX, evt.clientY)
         */
        if (btn.innerText === 'Расскрыть') {
            text.style.height = `${text.scrollHeight}px`;
            btn.innerText = 'Закрыть';
        } else {
            text.style.height = '200px';
            btn.innerText = 'Расскрыть';
        }
    });

    const hiddenBtn = (element) => {
        return () => element.hidden = 'true';
    };

    btn.addEventListener('click', hiddenBtn(btn));
    text.querySelector('#content-text p')
        .addEventListener('click', () => {
            btn.removeEventListener('click', hiddenBtn(btn));
            btn.hidden = '';
        });
}


getJsonData(
    'https://www.bani.ru/products/api/cities/top/?limit=100&',
    (json) => json.data.filter(obj => obj.name.toLowerCase().startsWith('а')),
    (arr) => arr.forEach(el => console.log(el))
    );
new Promise(function(resolve, reject) {
    setTimeout(() => {
        try {
            throw new Error("Whoops!")
        } catch (e) {
            alert(e.message);
        }
    }, 1000);
    // resolve();
    // reject(new Error("Whoops!"));
}).catch(alert);
