import ConfigJson from '../../../Config.json' with {type: 'json'};
import CommonConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = CommonConfigJson.routePath;
    //let jVarLocalFolderName = ConfigJson.folderName;
    //let jVarLocalTableName = ConfigJson.tableName;

    let jVarLocalLocalStorageKey = ConfigJson.localStorageKeys.AddOnsKey;

    // let jVarLocalFetchUrl = `/Custom/Cleaning/Masters/V2/AddOns/DataOnly`;
    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/MastersAddOns/Read/AsIs`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }