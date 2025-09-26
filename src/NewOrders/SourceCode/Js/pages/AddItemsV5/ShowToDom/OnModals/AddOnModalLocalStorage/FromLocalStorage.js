import ConfigJson from '../../../Config.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.PresentOrderAddOnsKey;
    let jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);

    return jVarLocalDataFromLocalStorageJson
};

export { StartFunc };