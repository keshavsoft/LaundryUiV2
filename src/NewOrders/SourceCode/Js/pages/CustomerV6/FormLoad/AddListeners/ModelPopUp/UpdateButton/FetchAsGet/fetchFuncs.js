import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = getUrlJson.GetEndPoint;
    const jVarLocalFromDom = jFLocalCustomerNameInputId();
    // debugger;
    const jVarLocalMobileFromDom = jVarLocalFromDom.split(":")[1].trim();

    const jVarLocalReplaceMobile = jVarLocalFetchUrl.replace("{MobileNumber}", jVarLocalMobileFromDom);

    let response = await fetch(jVarLocalReplaceMobile);

    return await response;
};

let jFLocalCustomerNameInputId = () => {
    let jVarLocalCustomerNameInputId = 'CustomerNameInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };

