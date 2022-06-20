'use strict';

function createTag(nodeElem, elementName, setElementPos, text, value, isDefaultSelected, isSelected) {
    if (elementName !== '' && elementName) {
        const element = document.createElement(elementName);
        if (text) element.append(text);
        if (value) element.value = value;
        if (isDefaultSelected) element.defaultSelected = true;
        else if (isSelected) element.selected = true;
        if (nodeElem) setElementPos(nodeElem, element);
    } else {
        throw new Error(`Element \'${elementName}\' is not defined or empty!`);
    }
}

export {createTag}
