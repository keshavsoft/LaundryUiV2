import ConfigJson from '../Config.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;

    let JVarLocalFromStrogeAddOnData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);

    return jVarLocalData;
};

export { StartFunc };