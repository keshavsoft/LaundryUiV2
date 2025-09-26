import UrlJson from "../../../Config  .json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.routePath;
    let LocalMastersItemstableName = UrlJson.MastersItemstableName;

    let jVarLocalFetchUrl = `/${LocalroutePath}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

