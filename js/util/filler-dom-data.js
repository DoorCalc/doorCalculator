import {createTag} from "./creator-element.js";

function fillSelects(json, ...selectNames) {
    try {
        for (let i = 0; i < selectNames.length; i++) {
            let jsonValues = Object.keys(Object.values(json)[i]);
            for (let j = 0; j < jsonValues.length; j++) {
                createTag(document.querySelector(selectNames[i])
                    , 'option'
                    , (node, el) => node.append(el)
                    , jsonValues[j], jsonValues[j], true, true);
            }
        }
    } catch (e) {
        alert(e.message + '\n Пожалуйста, перезагрузите страницу!')
    }
}

export {fillSelects}
