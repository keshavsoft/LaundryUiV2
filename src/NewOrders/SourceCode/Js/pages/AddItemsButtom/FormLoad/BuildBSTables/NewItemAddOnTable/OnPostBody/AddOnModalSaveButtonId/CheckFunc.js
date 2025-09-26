import { StartFunc as StartFuncCheckService } from "../../../../../FromLocalStorage/AddOnData/checkService.js";

let StartFunc = () => {
    const jVarLocalAddOnService = jFLocalTableFooterAddOnSelectId();

    return StartFuncCheckService({ inAddOnService: jVarLocalAddOnService });
}

let jFLocalTableFooterAddOnSelectId = () => {
    let jVarLocalTableFooterAddOnSelectId = 'TableFooterAddOnSelectId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterAddOnSelectId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }