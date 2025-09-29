import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalFromDom = jFLocalCustomerNameInputId();
    console.log("aaaaaaaaa : ", jVarLocalFromDom);

    let jVarLocalMobileNumber = jVarLocalFromDom.split(":")[1];
    let jVarLocalUserName = localStorage.getItem("UserName");

    KeysJson.body.Key = "CustomerData";

    KeysJson.body.Value = {};

    KeysJson.body.Value.Mobile = jVarLocalMobileNumber;
    KeysJson.body.Value.UserName = jVarLocalUserName;

    KeysJson.body.Value.CustomerName = jVarLocalFromDom.split(":")[0];
    KeysJson.body.Value.DOB = "";
    KeysJson.body.Value.GSTNumber = "";
    KeysJson.body.Value.City = "";
    KeysJson.body.Value.Occupation = "";

    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalCustomerNameInputId = () => {
    let jVarLocalCustomerNameInputId = 'CustomerNameInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };