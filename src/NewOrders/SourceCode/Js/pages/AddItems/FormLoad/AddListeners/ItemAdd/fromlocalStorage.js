import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFuncinItemType = ({ inCategory, inItemType }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.ItemNamesKey;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);

    let jVarLocalItemArray = JSON.parse(jVarLocalFromLocalStorage);

    let jVarLocalItemNeeded = jVarLocalItemArray.filter(element => element.Category === inCategory && element.ItemType === inItemType);

    return jVarLocalItemNeeded;
};

let StartFuncServiceFind = ({ inCategory, inItemType, inService }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.ItemNamesKey;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);

    let jVarLocalItemArray = JSON.parse(jVarLocalFromLocalStorage);

    let jVarLocalItemNeeded = jVarLocalItemArray.find(element => element.Category === inCategory && element.ItemType === inItemType && element.Service === inService);

    return jVarLocalItemNeeded;
};

let StartFuncItemNamesKey = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.ItemNamesKey;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);

    return JSON.parse(jVarLocalFromLocalStorage);
};

export { StartFuncServiceFind, StartFuncItemNamesKey, StartFuncinItemType }
