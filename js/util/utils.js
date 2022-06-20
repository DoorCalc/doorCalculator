'use strict';

/**
 * @param elem - проверяемый dom-элемент
 * @function isHidden - проверяет видим ли элемент на странице
 * */
function isHidden(elem) {
    return !elem.offsetWidth && !elem.offsetHeight;
}

/** пракрутка по координатам top/left плавная из-за smooth, по умолчанию auto
 * например нужно прокрутить в начало плавно
 * Ширина/высота видимой части документа (ширина/высота области содержимого):
 * document.documentElement.clientWidth/Height
 *
 * Чтобы запретить прокрутку страницы, достаточно установить document.body.style.overflow = "hidden" вне этого метода
 *
 * */
function scrollTo(element, top, left, behavior = 'smooth') {
    element.scrollTo({
        top: top,
        left: left,
        behavior: behavior
    });
}

/**  получить координаты элемента в контексте документа */
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

/**  вернуть позицию (x,y) относительно anchor элемента
 *  например, если нужно показать заметку рядом с элементом
 * */
function positionAt(anchor, position, elem) {

    elem.style.position = 'absolute';
    let anchorCoords = getCoords(anchor);

    switch (position) {
        case "top-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right-out":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;

        case "top-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "right-in":
            elem.style.width = '150px';
            elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px"; // в рамке
            // elem.style.top = anchorCoords.top + (anchor.offsetHeight - anchor.clientHeight) / 2 + "px"; // под рамкой
            break;

        case "bottom-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
            break;
    }
}

/**
 * Если нужно повесить событие на несколько элементов
 * */
class ClickerMultiBtn {
    // elem в данном случае - это контейнер элементов, над которыми вешается слушатель, работает принцип всплытия
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
        alert('Выполнить например сохранение чего-то');
    }

    load() {
        alert('Выполнить например загрузку чего-то');
    }

    search() {
        alert('Выполнить например поиск чего-то');
    }

    onClick(event) {
        // let action в данном случае будет имя метода, а dataset.action - приходит из html атрибута data-action
        let action = event.target.dataset.action;
        if (action) {
            // вызов метода текущего класса с именем action
            this[action]();
        }
    }
}

/*
* Пример: Summator.sum(1)(2,3,4,5)(6,7)(8,9)(10)(11); Результат будет в Summator.arr
*/
const Summator = {
    arr: 0,
    sum(...x) {
        return (...y) => {
            const z = x.reduce((sum, current) => sum + current, 0)
                + y.reduce((sum, current) => sum + current, 0);
            this.arr = z;
            return this.sum(z);
        }
    }
};

export {positionAt}
