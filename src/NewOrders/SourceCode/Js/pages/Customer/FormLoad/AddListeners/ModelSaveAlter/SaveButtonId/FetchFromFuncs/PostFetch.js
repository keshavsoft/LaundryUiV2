import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from "../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let Localurl = UrlJson.url;
    // let LocaltableName = UrlJson.tableName;
    let jVarLocalFilterString = jFLocalpkId();

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `${Localurl}/${jVarLocalFilterString}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

let jFLocalpkId = () => {
    let jVarLocalpkId = 'pkId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalpkId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
export { StartFunc };

