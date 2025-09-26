import ConfigJson from "../Config.json" with { type: "json" };

let StartFunc = async () => {
    let Localurl = ConfigJson.url;
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    
    const jVarLocalFromDom = jFLocalCustomerNameInputId();
    // debugger;
    const jVarLocalMobileFromDom = jVarLocalFromDom.split(":")[1].trim();

    let jVarLocalFetchUrl = `/${Localurl}/${jVarLocalBranchName}/${jVarLocalMobileFromDom}`;
    let response = await fetch(jVarLocalFetchUrl);


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

