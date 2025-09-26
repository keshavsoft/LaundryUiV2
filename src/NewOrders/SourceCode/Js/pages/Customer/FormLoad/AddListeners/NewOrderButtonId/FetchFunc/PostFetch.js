import { StartFunc as FetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchHeaders = FetchHeaders();
    // let jVarLocalMobileNumber = jVarLocalFetchHeaders.split(":")[1];
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    // let jVarLocalFetchUrl = `${ConfigJson.Urls.NewOrderButtonId.PostFetch}/${jVarLocalBranchName}`;
    // let jVarLocalFetchUrl = ConfigJson.Urls.NewOrderButtonId.PostFetch
    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/${jVarLocalBranchName}/AddWithDefault/InsertFromBody`

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

// let jFLocalCustomerNameInputId = () => {
//     let jVarLocalCustomerNameInputId = 'CustomerNameInputId'
//     let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

//     if (jVarLocalHtmlId === null === false) {
//         return jVarLocalHtmlId.value.trim();
//     };
// };
export { StartFunc };

