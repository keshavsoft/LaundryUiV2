import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;
    let jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);

    let jVarLocalItemsArray = jFLocalItemsObjectToArray({ inItemsObject: jVarLocalDataFromLocalStorageJson.ItemsInOrder });
    // console.log("jVarLocalItemsArray : ", jVarLocalItemsArray);

    return jVarLocalItemsArray;
};

const jFLocalItemsObjectToArray = ({ inItemsObject }) => {
    const jVarLocalItemsArray = Object.entries(inItemsObject).map(([key, value]) => {
        return { ...value, pk: key };
    });

    return jVarLocalItemsArray;
};

export { StartFunc };