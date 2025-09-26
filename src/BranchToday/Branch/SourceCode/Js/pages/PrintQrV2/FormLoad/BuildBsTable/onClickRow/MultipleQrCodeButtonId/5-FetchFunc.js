import ConfigJson from "../../../../Config.json" with {type: "json"};

let StartFunc = async ({ inRow }) => {
    var jVarLocalRowPk = inRow.pk;

    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/QrCodes/Show/Filter/OrderNumber/${jVarLocalRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return await jVarLocalResponse;
};

export { StartFunc };
