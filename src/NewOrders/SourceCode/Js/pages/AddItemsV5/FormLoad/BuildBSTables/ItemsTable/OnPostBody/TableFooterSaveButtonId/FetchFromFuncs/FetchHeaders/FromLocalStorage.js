import ConfigJson from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = ({ inCategory, inItemType, inService }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.ItemNamesKey;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);

    let jVarLocalItemArray = JSON.parse(jVarLocalFromLocalStorage);

    let jVarLocalItemNeeded = jVarLocalItemArray.find(element => element.Category === inCategory && element.ItemType === inItemType && element.Service === inService);

    return jVarLocalItemNeeded;
};

export { StartFunc }