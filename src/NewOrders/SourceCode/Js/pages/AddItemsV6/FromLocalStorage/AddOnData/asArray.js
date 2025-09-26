import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.PresentOrderAddOnsKey;

    let JVarLocalFromStrogeAddOnData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);

    return jVarLocalData;
};

export { StartFunc };