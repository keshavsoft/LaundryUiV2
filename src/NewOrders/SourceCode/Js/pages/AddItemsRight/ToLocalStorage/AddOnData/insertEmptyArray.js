import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/AddOnData/asArray.js";
import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.PresentOrderAddOnsKey;
    let jVarFromLocalStorage = StartFuncFromLocalStorage();

    if (jVarFromLocalStorage === null) {
        let JVarLocalFromStrogeAddOnData = localStorage.setItem(jVarLocalStorageKey, JSON.stringify([]));
    };

    //let JVarLocalFromStrogeAddOnData = localStorage.setItem(jVarLocalStorageKey, JSON.stringify([]));
};

export { StartFunc };