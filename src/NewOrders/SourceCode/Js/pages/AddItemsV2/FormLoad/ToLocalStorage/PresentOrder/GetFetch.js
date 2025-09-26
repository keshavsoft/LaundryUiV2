import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = ConfigJson.routePath;
    let jVarLocalFolderName = ConfigJson.folderName;
    let jVarLocalTableName = localStorage.getItem("BranchName");
    let jVarLocalLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;

    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/Order/NewOrder/MaxRow/${jVarLocalTableName}`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }