import { StartFunc as StartFuncToLocalStorage } from "./toLocalStorage.js";
import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncShowToDom } from "../../../../../ShowToDom/OnModals/AddOnModalLocalStorage/EntryFile.js";

const StartFunc = () => {
    const jVarLocalFromCheck = StartFuncCheckFunc();
    console.log(" : ", jVarLocalFromCheck);

    if (jVarLocalFromCheck) {
        StartFuncToLocalStorage();
        StartFuncShowToDom();
        LocalFuncForTableFooterAddOnSelectIdFocus();
    };
};

let LocalFuncForTableFooterAddOnSelectIdFocus = () => {
    let jVarLocalHtmlId = 'TableFooterAddOnSelectId';
    let jVarLocalTableFooterAddOnSelectId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterAddOnSelectId === null === false) {
        jVarLocalTableFooterAddOnSelectId.focus();
    };
};

export { StartFunc };