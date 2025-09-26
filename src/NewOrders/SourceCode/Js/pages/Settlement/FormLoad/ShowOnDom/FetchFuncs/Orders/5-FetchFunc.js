import ConfigJson from "../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let jVarLocalinPk = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `/${ConfigJson.GetUrl}/${jVarLocalinPk}/${jVarLocalBranchName}`;
    let response = await fetch(jVarLocalFetchUrl);

    return response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };