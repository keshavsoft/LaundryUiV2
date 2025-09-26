let jVarCommonAddOnModalLocalStorage = document.getElementById('AddOnModalLocalStorage');

let StartFunc = ({ inRow }) => {
    const jVarLocalRow = inRow;
    const jVarLocalItemName = jFLocalTableFooterItemNameId();
    const jVarLocalItemRate = jFLocalTableFooterRateInputId();

    jFLocalToInputAddOnModalItemNameId(jVarLocalItemName);
    // jFLocalToInputAddOnModalItemSerialId(jVarLocalRow.pk);
    jFLocalToInputRate(jVarLocalItemRate);
};

let jFLocalTableFooterItemNameId = () => {
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

let jFLocalToInputAddOnModalItemNameId = (inValue) => {
    const jVarLocalHtmlControl = jVarCommonAddOnModalLocalStorage.querySelector(".AddOnModalLocalStorageItemNameClass");

    if (jVarLocalHtmlControl === null === false) {
        jVarLocalHtmlControl.value = inValue;
    };
};

let jFLocalToInputAddOnModalItemSerialId = (inValue) => {
    let jVarLocalHtmlId = 'AddOnModalItemSerialId';
    let jVarLocalAddOnModalItemSerialId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddOnModalItemSerialId === null === false) {
        jVarLocalAddOnModalItemSerialId.value = inValue;
    };
};

let jFLocalToInputRate = (inValue) => {
    const jVarLocalHtmlControl = jVarCommonAddOnModalLocalStorage.querySelector(".AddOnModalLocalStorageItemRateClass");

    if (jVarLocalHtmlControl === null === false) {
        jVarLocalHtmlControl.value = inValue;
    };
};

export { StartFunc };