import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = ({ inCategory, inItemType }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.ItemNamesKey;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);

    let jVarLocalItemArray = JSON.parse(jVarLocalFromLocalStorage);

    let jVarLocalItemNeeded = jVarLocalItemArray.filter(element => element.Category === inCategory && element.ItemType === inItemType);

    return jVarLocalItemNeeded;
};

export { StartFunc }