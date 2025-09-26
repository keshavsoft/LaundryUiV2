import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchHeaders = jFLocalCustomerNameInputId();
    let jVarLocalMobileNumber = jVarLocalFetchHeaders.split(":")[1];

    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `${ConfigJson.Urls.NewOrderButtonId.PostFetch}/${jVarLocalBranchName}/${jVarLocalMobileNumber}`;

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

