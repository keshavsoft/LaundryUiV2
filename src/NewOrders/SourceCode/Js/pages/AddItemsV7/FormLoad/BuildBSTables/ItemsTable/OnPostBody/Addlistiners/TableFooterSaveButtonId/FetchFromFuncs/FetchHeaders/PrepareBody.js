import { StartFuncServiceFind as StartFuncFromLocalStorage } from "../../../fromlocalStorage.js";

const StartFunc = () => {
    let jVarLocalCategory = jFLocalTableFooterCategoryId();
    let jVarLocalItemType = LocalFuncForjVarLocalTableFooterItemNameId();
    let jVarLocalItemRate = jFLocalTableFooterRateInputId();
    let jVarLocalPcs = jFLocalTableFooterPcsInputId();
    let jVarLocalTotal = jFLocalTableFooterTotalId();
    let jVarLocallocation = jFLocalTableFooterFactoryInputId();
    let jVarLocalDeliveryDateTime = jFLocalTableFooterdateInputId();
    const jVarLocalItemService = jFLocalTableFooterItemServiceId();

    let LocalAddOnData = JSON.parse(localStorage.getItem("PresentOrderAddOns"));

    const jVarLocalFromLocalStorageFind = StartFuncFromLocalStorage({
        inCategory: jVarLocalCategory,
        inItemType: jVarLocalItemType,
        inService: jVarLocalItemService
    });

    let LocalLocalObj = {};
    LocalLocalObj.Category = jVarLocalCategory;
    LocalLocalObj.ItemName = jVarLocalFromLocalStorageFind.ItemName;
    LocalLocalObj.ItemType = jVarLocalItemType
    LocalLocalObj.Rate = jVarLocalItemRate
    LocalLocalObj.Pcs = jVarLocalPcs
    LocalLocalObj.Total = jVarLocalTotal
    LocalLocalObj.location = jVarLocallocation
    LocalLocalObj.DeliveryDateTime = jVarLocalDeliveryDateTime;
    LocalLocalObj.ItemService = jVarLocalItemService;
    LocalLocalObj.AddOnArray = LocalAddOnData;

    return LocalLocalObj;
};

let jFLocalTableFooterItemServiceId = () => {
    let jVarLocalTableFooterItemServiceId = 'TableFooterItemServiceId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemServiceId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterCategoryId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterCategoryId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let LocalFuncForjVarLocalTableFooterItemNameId = () => {
    let jVarLocalTableFooterItemNameId = 'TableFooterItemNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterRateInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterRateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterPcsInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterPcsInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterFactoryInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterFactoryInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterdateInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterdateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterTotalId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterRateInputId'
    let jVarLocalHtmlId1 = document.getElementById(jVarLocalTableFooterRateInputId);
    let jVarLocalTableFooterPcsInputId = 'TableFooterPcsInputId'
    let jVarLocalHtmlId2 = document.getElementById(jVarLocalTableFooterPcsInputId);
    console.log("Total:", jVarLocalHtmlId1.value * jVarLocalHtmlId2.value);
    return jVarLocalHtmlId1.value * jVarLocalHtmlId2.value;
};
export { StartFunc }