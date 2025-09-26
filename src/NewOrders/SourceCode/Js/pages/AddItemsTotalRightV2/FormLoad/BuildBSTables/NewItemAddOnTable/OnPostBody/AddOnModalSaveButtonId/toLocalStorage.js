import { StartFunc as StartFuncFromDom } from "./fromDom.js";

import ConfigJson from '../../../../../Config.json' with {type: 'json'};

const StartFunc = () => {
    const jVarLocalFromDom = StartFuncFromDom();
  
    jFLocalToLocalStorage({ inAddOnRow: jVarLocalFromDom });
};

const jFLocalToLocalStorage = ({ inAddOnRow }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.PresentOrderAddOnsKey;

    let JVarLocalFromStrogeAddOnData = localStorage.getItem(jVarLocalStorageKey);

    if (JVarLocalFromStrogeAddOnData === null) {
        localStorage.setItem(jVarLocalStorageKey, JSON.stringify([inAddOnRow]));
        return;
    };

    let jVarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);

    jVarLocalData.push(inAddOnRow);

    localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalData));
};

export { StartFunc };