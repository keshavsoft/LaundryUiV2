const StartFunc = (data) => {
    let localItemdata = data;
    jFLocalToInputItemsId(localItemdata)
};

let jFLocalToInputItemsId = (inValue) => {
    let jVarLocalHtmlId = 'ItemsId';
    let jVarLocalItemsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemsId === null === false) {
        jVarLocalItemsId.innerHTML = inValue;
    };
};

export { StartFunc };