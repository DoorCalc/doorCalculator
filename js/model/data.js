'use strict';

const Catalog = {
    lock: {
        flora: "100",
        ruby: "500",
        zalcer: "400"
    },
    size: {
        smoll: "100",
        medium: "300",
        big: "500"
    },
    color: {
        green: "100",
        red: "200",
        black: "140"
    }
};

function searchInJsonObj(obj, item){
    let result = '';
    for (let key in obj){
        if(typeof obj[key] !== 'object'){
            if(key === item){
                result = obj[key];
                return obj[key];
            }
        } else {
            result += searchInJsonObj(obj[key], item);
        }
    }
    return result;
}

function getCatalog() {
    return Catalog;
}

export {searchInJsonObj, getCatalog}