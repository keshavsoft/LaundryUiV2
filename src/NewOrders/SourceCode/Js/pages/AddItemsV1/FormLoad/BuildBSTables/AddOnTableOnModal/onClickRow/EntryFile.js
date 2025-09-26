import { StartFunc as StartFuncDeleteFetch } from "./DeleteFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

import ConfigJson from '../../../../Config.json' with {type: 'json'};

const StartFunc = async (row, $element, field) => {
    if (field === 3) {
        if (window.confirm("Do you really want to Delete this AddOn?")) {
            const jVarLocalRowpk = RowPkLocalStorage();
            console.log("aaaaaaaaaa : ,row", row);

            // let responce = await StartFuncDeleteFetch({ inRowpk: jVarLocalRowpk });

            // StartFuncAfterFetch({ inResponce: responce })
        };
    };
};

const RowPkLocalStorage = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;
    let jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);

    return jVarLocalDataFromLocalStorageJson.pk;
};

export { StartFunc };