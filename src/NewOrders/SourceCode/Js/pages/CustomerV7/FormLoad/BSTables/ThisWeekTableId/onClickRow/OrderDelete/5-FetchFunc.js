import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

const StartFunc = async ({ inRowData }) => {
    let LocalRowPk = inRowData.pk;
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/Today/Orders/OnlyOrders/${jVarLocalBranchName}/${LocalRowPk}`;

    let jVarLocalFetchHeaders = {
        method: "delete",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let jVarLocalResponse = await response.json();
    StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

    return jVarLocalResponse;

};

export { StartFunc };
