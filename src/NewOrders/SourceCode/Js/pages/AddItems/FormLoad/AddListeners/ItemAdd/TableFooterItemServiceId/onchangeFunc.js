import { StartFuncServiceFind as StartFuncFromLocalStorage } from "../fromlocalStorage.js";

const StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalService = jVarLocalCurrentTarget.value;

    const jVarLocalCategorySelected = jFLocalTableFooterCategoryId();
    const jVarLocalItemType = jFLocalTableFooterItemNameId();

    let jVarLocalFromLocalStorageFind = StartFuncFromLocalStorage({
        inCategory: jVarLocalCategorySelected,
        inItemType: jVarLocalItemType,
        inService: jVarLocalService
    });
    jFLocalToInputTableFooterRateInputId(jVarLocalFromLocalStorageFind.DryWashRate);
};

let jFLocalTableFooterItemNameId = () => {
    let jVarLocalTableFooterItemNameId = 'TableFooterItemNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterCategoryId = () => {
    let jVarLocalTableFooterCategoryId = 'TableFooterCategoryId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterCategoryId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalToInputTableFooterRateInputId = (inValue) => {
    let jVarLocalHtmlId = 'TableFooterRateInputId';
    let jVarLocalTableFooterRateInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterRateInputId === null === false) {
        jVarLocalTableFooterRateInputId.value = inValue;
    };
};

export { StartFunc };