import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalFromDom = jFLocalCustomerNameInputId();
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let LocalModifiedBranchName = jVarLocalBranchName.replace("BranOrders", "");

    let jVarLocalMobileNumber = jVarLocalFromDom.split(":")[1];
    let jVarLocalUserName = localStorage.getItem("UserName");

    KeysJson.body.ItemsInOrder = {};
    KeysJson.body.CustomerData = {};
    KeysJson.body.OrderData = {};
    KeysJson.body.AddOnData = {};
    KeysJson.body.CheckOutData = {};

    KeysJson.body.OrderData.BranchName = LocalModifiedBranchName;
    KeysJson.body.OrderData.Mobile = jVarLocalMobileNumber;

    KeysJson.body.CustomerData.Mobile = jVarLocalMobileNumber;
    KeysJson.body.CustomerData.UserName = jVarLocalUserName;

    KeysJson.body.CustomerData.CustomerName = jVarLocalFromDom.split(":")[0];
    KeysJson.body.CustomerData.DOB = "";
    KeysJson.body.CustomerData.GSTNumber = "";
    KeysJson.body.CustomerData.City = "";
    KeysJson.body.CustomerData.Occupation = "";

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