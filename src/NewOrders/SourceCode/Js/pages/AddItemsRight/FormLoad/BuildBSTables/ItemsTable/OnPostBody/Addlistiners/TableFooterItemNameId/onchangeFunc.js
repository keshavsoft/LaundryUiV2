import { StartFuncinItemType as StartFuncFromLocalStorage } from "../fromlocalStorage.js";

const StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalItemType = jVarLocalCurrentTarget.value;
    const jVarLocalCategorySelected = jFLocalTableFooterCategoryId();

    let jVarLocalTableFooterItemServiceId = document.getElementById('TableFooterItemServiceId');

    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage({
        inCategory: jVarLocalCategorySelected,
        inItemType: jVarLocalItemType
    });

    const jVarLocalGroupByService = Object.groupBy(jVarLocalFromLocalStorage, ({ Service }) => Service);
    // console.log("jVarLocalGroupByItemType : ", jVarLocalGroupByItemType);

    const jVarLocalServicesArray = Object.keys(jVarLocalGroupByService).map((key) => {
        return key;
    });

    let jVarLocalOrdered = jVarLocalServicesArray.sort((x, y) => {
        return ((x == y) ? 0 : ((x > y) ? 1 : -1));
    });

    var options = '';

    for (var i = 0; i < jVarLocalOrdered.length; i++) {
        options += `<option value="${jVarLocalOrdered[i]}">${jVarLocalOrdered[i]}</option>`;
    };

    jVarLocalTableFooterItemServiceId.innerHTML = options;

    // jFLocalToInputTableFooterRateInputId(jVarLocalItemData.DryWashRate);
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