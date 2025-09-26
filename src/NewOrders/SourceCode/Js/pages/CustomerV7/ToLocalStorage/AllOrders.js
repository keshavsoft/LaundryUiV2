import { StartFunc as StartFuncFromLocalStorage } from "../FromLocalStorage/AllOrders.js";
import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = ({ inOrdersArray }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.CustomerOrderKey;
    let jVarFromLocalStorage = StartFuncFromLocalStorage();

    if (jVarFromLocalStorage === null) {
        localStorage.setItem(jVarLocalStorageKey, JSON.stringify([]));
    };

    localStorage.setItem(jVarLocalStorageKey, JSON.stringify(inOrdersArray));
};

export { StartFunc };