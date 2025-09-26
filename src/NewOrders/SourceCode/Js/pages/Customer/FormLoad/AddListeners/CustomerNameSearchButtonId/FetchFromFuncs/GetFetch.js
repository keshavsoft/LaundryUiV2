import ConfigJson from "../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.TodayUrl;
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalCustomersDataListId = document.getElementById("CustomerNameInputId");
    let jVarLocalCustomerValue = jVarLocalCustomersDataListId.value;
    let jVarLocalCustomernumbersOnly = jVarLocalCustomerValue.replace(/\D/g, "");
    
    let jVarLocalFetchUrl = `/${LocalroutePath}/${jVarLocalBranchName}/${jVarLocalCustomernumbersOnly}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

