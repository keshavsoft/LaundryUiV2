import { StartFunc as StartFuncCheckService } from "../../../../../FromLocalStorage/AddOnData/checkService.js";

const StartFunc = () => {
    if (!jFTableFooterItemNameId()) return false;

    const jVarLocalAddOnService = jFLocalTableFooterAddOnSelectId();

    return StartFuncCheckService({ inAddOnService: jVarLocalAddOnService }) !== false;
};

const jFTableFooterItemNameId = () => {
    const jVarLocalFactory = document.getElementById('TableFooterAddOnSelectId');

    if (!jVarLocalFactory.value.trim()) {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    }

    jVarLocalFactory.classList.remove("is-invalid");
    return true;
};

const jFLocalTableFooterAddOnSelectId = () => {
    const jVarLocalHtmlId = document.getElementById('TableFooterAddOnSelectId');

    return jVarLocalHtmlId ? jVarLocalHtmlId.value.trim() : undefined;
};

export { StartFunc };
