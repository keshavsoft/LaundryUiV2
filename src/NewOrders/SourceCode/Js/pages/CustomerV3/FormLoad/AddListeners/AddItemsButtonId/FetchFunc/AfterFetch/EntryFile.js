import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = () => {
    // window.location = "AddItemsV1.html";
    const jVarLocalAddItemsHtmlId = jFLocalAddItemsHtmlId();

    switch (jVarLocalAddItemsHtmlId) {
        case "AddRight":
            window.location = "/Laundry/Branch/NewOrders/HtmlFiles/AddItemsRight.html";

            break;
        case "AddBottom":

            break;

        default:
            break;
    }

    // window.location = ConfigJson.Urls.NewOrderButtonId.RedirectUrl['200Status'];
};

let jFLocalAddItemsHtmlId = () => {
    let jVarLocalAddItemsHtmlId = 'AddItemsHtmlId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalAddItemsHtmlId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };