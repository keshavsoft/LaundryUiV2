const StartFunc = async ({ inRowData }) => {

    let LocalRowPk = inRowData.pk;
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `/LaundryV1/Branch/QrCode/V1/Generate/${jVarLocalBranchName}/${LocalRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);

    return response;

};

export { StartFunc };
