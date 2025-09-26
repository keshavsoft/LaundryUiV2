import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = () => {
     let jVarLocalStorageKey = ConfigJson.localStorageKeys.CustomerOrderKey;
 
     let JVarLocalFromStrogeAddOnData = localStorage.getItem(jVarLocalStorageKey);
     let jVarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
 
     return jVarLocalData;
 };

export { StartFunc };