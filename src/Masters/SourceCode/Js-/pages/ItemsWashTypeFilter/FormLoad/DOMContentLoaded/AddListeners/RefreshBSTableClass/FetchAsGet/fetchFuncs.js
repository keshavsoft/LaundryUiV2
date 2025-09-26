import getUrlJson from './getUrl.json' with {type: 'json'};
import ConfigJson from '../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalroutePath = ConfigJson.routePath;
    let jVarLocalFetchUrl = `/${jVarLocalroutePath}/${getUrlJson.GetEndPoint}`;

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

