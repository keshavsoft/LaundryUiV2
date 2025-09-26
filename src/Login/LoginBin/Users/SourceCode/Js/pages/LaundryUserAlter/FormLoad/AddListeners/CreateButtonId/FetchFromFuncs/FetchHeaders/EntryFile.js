import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    KeysJson.body.UserName = jFLocalyourUsername();
    KeysJson.body.Password = jFLocalyourPassword();
    KeysJson.body.Branch = jFLocalyourBranch();
    KeysJson.body.BranchMobile = jFLocalyourMobile();
    KeysJson.body.UserMobile = jFLocalUserMobile();
    KeysJson.body.isAdminValidated = false;
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalyourUsername = () => {
    let jVarLocalyourUsername = 'yourUsername'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourUsername);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalyourPassword = () => {
    let jVarLocalyourPassword = 'yourPassword'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourPassword);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalyourBranch = () => {
    let jVarLocalyourPassword = 'yourBranch'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourPassword);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalyourMobile = () => {
    let jVarLocalyourPassword = 'yourMobile'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourPassword);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalUserMobile = () => {
    let jVarLocalyourPassword = 'UserMobile'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourPassword);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }