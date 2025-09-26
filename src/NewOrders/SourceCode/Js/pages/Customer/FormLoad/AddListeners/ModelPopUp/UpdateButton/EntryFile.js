import { StartFunc as StartFuncFuncToRun } from "./FetchAsGet/entryFile.js";

let StartFunc = () => {
    let jVarLocalCustomerNameInputId = "CustomerAlter";
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    jVarLocalHtmlId.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc };