import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";
const jVarCommonHtmlId = "AddItemsButtonId";

let StartFunc = () => {
    let jVarLocalCustomerNameInputId = jVarCommonHtmlId;
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    jVarLocalHtmlId.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc }