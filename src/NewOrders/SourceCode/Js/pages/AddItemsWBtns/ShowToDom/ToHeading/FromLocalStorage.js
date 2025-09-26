import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = () => {
    debugger;
    let jVarLocalKey = ConfigJson.localStorageKeys.OrderKey;
    let jVarLocalData = localStorage.getItem(jVarLocalKey);

    return JSON.parse(jVarLocalData);
};

export { StartFunc }