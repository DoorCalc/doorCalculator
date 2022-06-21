import {searchInJsonObj, getCatalog} from '../testModel/data.js'
import {fillSelects} from '../util/filler-dom-data.js';
import {positionAt} from "../util/utils.js";

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
  fillSelects(catalog, '#select-lock', '#select-doorSize', '#selectel-color');
  eventClickCalculateBtn("#cost-calculate", '#select-doorSize', '#select-lock', '#selectel-color');
};
