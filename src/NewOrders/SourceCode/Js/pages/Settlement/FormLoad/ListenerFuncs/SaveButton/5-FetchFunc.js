import Configjson from "../../../../Config.json" with {type: "json"};

let StartFunc = async ({ inSettlementData }) => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalBodyData = inSettlementData.inDataToUpdate;

    // let jVarLocalFetchUrl = `/${Configjson.PostUrl}/${inSettlementData.MainRowPK}/${jVarLocalBranchName}`;
    let jVarLocalFetchUrl = `/${Configjson.routePath}/${jVarLocalBranchName}/SubTableOnObj/Insert/AsIs/${inSettlementData.MainRowPK}/CheckOutData`;

    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
