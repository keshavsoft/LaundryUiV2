let StartFunc = async ({ inRow }) => {
    var jVarLocalRowPk = inRow.pk;

    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/QrCode/V1/Filter/OrderNumber/${jVarLocalRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return await jVarLocalResponse;
};

export { StartFunc };
