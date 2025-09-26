import { StartFuncinItemType as StartFuncFromLocalStorage } from "../fromlocalStorage.js";
const jVarLocalSelectId = "TableFooterItemServiceId";

const StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalItemType = jVarLocalCurrentTarget.value;
    const jVarLocalCategorySelected = jFLocalTableFooterCategoryId();

    let jVarLocalTableFooterItemServiceId = document.getElementById(jVarLocalSelectId);

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
    let jVarOrderedNames = jVarLocalOrdered.sort((a, b) => (a === 'DW' ? -1 : 0));

    var options = '';

    for (var i = 0; i < jVarOrderedNames.length; i++) {
        options += `<option value="${jVarOrderedNames[i]}">${jVarOrderedNames[i]}</option>`;
    };

    jVarLocalTableFooterItemServiceId.innerHTML = options;
    jFLocalEndFunc();
};

let jFLocalTableFooterCategoryId = () => {
    let jVarLocalItemTypeLabelId = document.getElementById('ItemTypeLabelId');

    return jVarLocalItemTypeLabelId.dataset.itemCategory;
};

let jFLocalEndFunc = () => {
    var event = new Event('change');
    let jVarLocalTableFooterCategoryId = document.getElementById(jVarLocalSelectId);

    if (jVarLocalTableFooterCategoryId === null === false) {
        jVarLocalTableFooterCategoryId.dispatchEvent(event);
    };
};

export { StartFunc };