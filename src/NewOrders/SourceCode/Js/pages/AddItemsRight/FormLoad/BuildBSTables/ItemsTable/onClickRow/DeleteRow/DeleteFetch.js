import ConfigJson from '../../../../../Config.json' with {type: 'json'};

const StartFunc = async ({ inRowpk, inItemSerial }) => {
    const jVarLocalDeleteUrl = ConfigJson.ApiUrls.ItemsTable.DeleteItemUrl;

    let jVarLocalBranchName = localStorage.getItem("BranchName");
    const jVarLocalSubId = inItemSerial;

    let LocalUrl = jVarLocalDeleteUrl.replace("$tableName", jVarLocalBranchName).replace(":Id", inRowpk).replace(":SubId", jVarLocalSubId);

    let LocalFetchObj = {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };

    let responce = await fetch(LocalUrl, LocalFetchObj);

    return responce;
};

export { StartFunc };