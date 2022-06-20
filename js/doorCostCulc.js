import {searchInJsonObj, getCatalog} from './model/data.js'
import {fillSelects} from './util/filler-dom-data.js';
import {positionAt} from "./util/utils.js";

const catalog = getCatalog();

/**
 * функции для обработчиков событий нужно объявлять отдельно, как эту, если событие нужно будет отменить
 */
const calculateThoughtAlert = (...selectElements) => {
  return () =>
      alert('Стоимость сейфа составит: ' + selectElements.reduce((a,b) =>
          a + parseInt(searchInJsonObj(catalog, document.querySelector(b).value)), 0) + ' рублей.');
};

function eventClickCalculateBtn(submitBtn, ...selectedParams) {
  const btn = document.querySelector(submitBtn);
  btn.addEventListener('click', calculateThoughtAlert(...selectedParams));
}

window.onload = function () {

  {
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

  fillSelects(catalog, '#select-lock', '#select-doorSize', '#selectel-color');
  eventClickCalculateBtn("#cost-calculate", '#select-doorSize', '#select-lock', '#selectel-color');
};
