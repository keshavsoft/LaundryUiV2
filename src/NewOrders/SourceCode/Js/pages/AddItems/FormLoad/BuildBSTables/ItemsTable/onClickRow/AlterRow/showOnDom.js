
const StartFunc = (inResponse) => {
    // console.log("inResponse:", inResponse);
    let LocalItemNames = JSON.parse(localStorage.getItem("ItemNames"));
    let jVarLocalFind = LocalItemNames.find(el => el.ItemName == inResponse.ItemName)

    jFLocalToInputTableFooterCategoryId({ inValue: inResponse.Category })
    jFLocalToInputTableFooterItemNameId({ inValue: jVarLocalFind.ItemType })
    jFLocalToInputTableFooterItemServiceId({ inValue: inResponse.ItemService })
    jFLocalToInputTableFooterRateInputId({ inValue: inResponse.Rate })
    jFLocalToInputTableFooterPcsInputId({ inValue: inResponse.Pcs })
    jFLocalToInputTableFooterFactoryInputId({ inValue: inResponse.location })
    jFLocalToInputTableFooterdateInputId({ inValue: inResponse.DeliveryDateTime })
    jFLocalToInputSubId({ inValue: inResponse.SubKey })
    jFTableFooterSaveButtonId();
    jFLocalTableFooterAlterButtonId();
    localStorage.setItem("PresentOrderAddOns", JSON.stringify(inResponse.AddOnArray));

};

let jFLocalToInputTableFooterCategoryId = ({ inValue }) => {
    let jVarLocalHtmlId = 'TableFooterCategoryId';
    let jVarLocalTableFooterCategoryId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterCategoryId === null === false) {
        jVarLocalTableFooterCategoryId.value = inValue;
    };
};

let jFLocalToInputTableFooterItemNameId = ({ inValue }) => {
    let jVarLocalHtmlId = 'TableFooterItemNameId';
    let jVarLocalTableFooterItemNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterItemNameId === null === false) {
        jVarLocalTableFooterItemNameId.value = inValue;
    };
};

let jFLocalToInputTableFooterItemServiceId = ({ inValue }) => {
    let jVarLocalHtmlId = 'TableFooterItemServiceId';
    let jVarLocalTableFooterItemServiceId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterItemServiceId === null === false) {
        jVarLocalTableFooterItemServiceId.value = inValue;
    };
};

let jFLocalToInputTableFooterRateInputId = ({ inValue }) => {
    let jVarLocalHtmlId = 'TableFooterRateInputId';
    let jVarLocalTableFooterRateInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterRateInputId === null === false) {
        jVarLocalTableFooterRateInputId.value = inValue;
    };
};

let jFLocalToInputTableFooterPcsInputId = ({ inValue }) => {
    let jVarLocalHtmlId = 'TableFooterPcsInputId';
    let jVarLocalTableFooterPcsInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterPcsInputId === null === false) {
        jVarLocalTableFooterPcsInputId.value = inValue;
    };
};

let jFLocalToInputTableFooterFactoryInputId = ({ inValue }) => {
    let jVarLocalHtmlId = 'TableFooterFactoryInputId';
    let jVarLocalTableFooterFactoryInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterFactoryInputId === null === false) {
        jVarLocalTableFooterFactoryInputId.value = inValue;
    };
};

let jFLocalToInputTableFooterdateInputId = ({ inValue }) => {
    let jVarLocalHtmlId = 'TableFooterdateInputId';
    let jVarLocalTableFooterdateInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterdateInputId === null === false) {
        jVarLocalTableFooterdateInputId.value = inValue;
    };
};

let jFLocalToInputSubId = ({ inValue }) => {
    let jVarLocalHtmlId = 'SubId';
    let jVarLocalSubId = document.getElementById(jVarLocalHtmlId);
    jVarLocalSubId.classList.remove("d-none")

    if (jVarLocalSubId === null === false) {
        jVarLocalSubId.innerHTML = inValue;
    };
    if (inValue === undefined) {
        jVarLocalSubId.innerHTML = 0;
    };
};

const jFTableFooterSaveButtonId = () => {
    let jVarLocalHtmlId = 'TableFooterSaveButtonId';
    let jVarLocalTableFooterdateInputId = document.getElementById(jVarLocalHtmlId);
    jVarLocalTableFooterdateInputId.classList.add("d-none")

};

let jFLocalTableFooterAlterButtonId = () => {
    let jVarLocalTableFooterAlterButtonId = 'TableFooterAlterButtonId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterAlterButtonId);
    jVarLocalHtmlId.classList.remove("d-none")
};


export { StartFunc };