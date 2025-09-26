import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = getUrlJson.GetEndPoint;
    let jVarLocalBranchName = localStorage.getItem('BranchName');
    const jVarLocalReplacedFetchUrl = jVarLocalFetchUrl.replace("{BranchName}", jVarLocalBranchName);

    let response = await fetch(jVarLocalReplacedFetchUrl);

    return await response;
};

export { StartFunc };

