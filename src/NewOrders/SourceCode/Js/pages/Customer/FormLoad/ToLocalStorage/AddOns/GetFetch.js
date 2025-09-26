 import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = ConfigJson.routePath;
    let jVarLocalLocalStorageKey = ConfigJson.localStorageKeys.AddOnsKey;

    // let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/MastersAddOns/Show/DataOnly`;
    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/MastersAddOns/Read/AsIs`;
    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }