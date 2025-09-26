import { StartFunc as StartFuncCustomerNames } from "./CustomerNames/GetFetch.js";
import { StartFunc as StartFuncItemNames } from "./ItemNames/GetFetch.js";
import { StartFunc as StartFuncAddOns } from "./AddOns/GetFetch.js";

let StartFunc = () => {
    StartFuncCustomerNames().then(() => {
        jFLocalToDataList();
    });
    
    StartFuncItemNames().then();
    StartFuncAddOns().then(() => location.reload());
};

const jFLocalToDataList = () => {
    let jVarLocalCustomersFromLocslstroge = localStorage.getItem("CustomerNames");

    if (jVarLocalCustomersFromLocslstroge === null === false) {
        let LocaCustomerData = JSON.parse(jVarLocalCustomersFromLocslstroge);
        let jVatLocalCustomersDataListId = document.getElementById("CustomersDataListId")
        jVatLocalCustomersDataListId.innerHTML = "";

        LocaCustomerData.forEach(element => {
            let LocalOption = document.createElement("option");
            LocalOption.value = `${element.CustomerName}:${element.Mobile}`
            LocalOption.innerHTML = `${element.CustomerName}:${element.Mobile}`
            jVatLocalCustomersDataListId.appendChild(LocalOption)
        });
    };
};

export { StartFunc }