import ConfigJson from '../../../../../Config.json' with {type: 'json'};

const StartFunc = async ({ inRowpk, inItemSerial }) => {
    const jVarLocalDeleteUrl = ConfigJson.ApiUrls.ItemsTable.DeleteAddOnUrl;

    let jVarLocalBranchName = localStorage.getItem("BranchName");
    const jVarLocalAddOnKey = inItemSerial;
    let jVarLocalSubId = jFLocalAddOnModalItemSerialId();

    let LocalUrl = jVarLocalDeleteUrl.replace("$tableName", jVarLocalBranchName).replace(":Id", inRowpk).replace(":SubId", jVarLocalSubId).replace(":AddOnKey", jVarLocalAddOnKey);

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

let jFLocalAddOnModalItemSerialId = () => {
    let jVarLocalAddOnModalItemSerialId = 'AddOnModalItemSerialId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalAddOnModalItemSerialId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };