import { StartFuncItemNamesKey as StartFuncFromLocalStorage } from "../fromlocalStorage.js";

const StartFunc = ({ inCategorySelected }) => {
    let jVarLocalHtmlId = "ItemsDataListId";
    let jVarLocalItemsDataListId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalCategorySelected = inCategorySelected;

    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage();
    let jVarLocalThisCategory = jVarLocalFromLocalStorage.filter(element => element.Category === jVarLocalCategorySelected);

    const jVarLocalGroupByItemType = Object.groupBy(jVarLocalThisCategory, ({ ItemType }) => ItemType);
    // console.log("jVarLocalGroupByItemType : ", jVarLocalGroupByItemType);

    const jVarLocalItemTypesArray = Object.keys(jVarLocalGroupByItemType).map((key) => {
        return key;
    });

    let jVarLocalOrdered = jVarLocalItemTypesArray.sort((x, y) => {
        return ((x == y) ? 0 : ((x > y) ? 1 : -1));
    });
    

    var options = '';

    for (var i = 0; i < jVarLocalOrdered.length; i++) {
        options += `<option value="${jVarLocalOrdered[i]}">${jVarLocalOrdered[i]}</option>`;
    };

    jVarLocalItemsDataListId.innerHTML = options;
    // Focus the input field
    document.getElementById("TableFooterItemNameId").focus();
};

export { StartFunc };