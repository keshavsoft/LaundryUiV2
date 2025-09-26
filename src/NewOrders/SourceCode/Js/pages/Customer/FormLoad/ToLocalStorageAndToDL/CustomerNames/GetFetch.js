import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = ConfigJson.routePath;
    let jVarLocalLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;

    let jVarLocalFetchUrl = `/Custom/Cleaning/Masters/V2/Customers/DataOnly`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();
    console.log(jVarLocalFromFetchJson);

    let getsort = jVarLocalFromFetchJson.sort((a, b) => a.CustomerName - b.CustomerName);

    jVarLocalFromFetchJson.sort(function (a, b) {
        var nameB = b.CustomerName.toLowerCase(), nameA = a.CustomerName.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });


    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(getsort));
};

export { StartFunc }