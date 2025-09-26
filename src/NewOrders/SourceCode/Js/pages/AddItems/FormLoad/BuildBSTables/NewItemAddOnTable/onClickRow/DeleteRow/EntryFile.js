import { StartFunc as StartFuncShowToDom } from "../../../../../ShowToDom/OnModals/AddOnModalLocalStorage/EntryFile.js";
import ConfigJson from '../../../../../Config.json' with {type: 'json'};

const StartFunc = ({ inRowIndex }) => {
    jFLocalRemoveRow({ inRowIndex });
    StartFuncShowToDom();

    LocalFuncForTableFooterAddOnSelectIdFocus();
};

let LocalFuncForTableFooterAddOnSelectIdFocus = () => {
    let jVarLocalHtmlId = 'TableFooterAddOnSelectId';
    let jVarLocalTableFooterAddOnSelectId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterAddOnSelectId === null === false) {
        jVarLocalTableFooterAddOnSelectId.focus();
    };
};

const jFLocalRemoveRow = ({ inRowIndex }) => {

    let jVarLocalStorageKey = ConfigJson.localStorageKeys.PresentOrderAddOnsKey;
    let jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);

    jVarLocalDataFromLocalStorageJson.splice(inRowIndex, 1);

    localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalDataFromLocalStorageJson));
};

export { StartFunc };

