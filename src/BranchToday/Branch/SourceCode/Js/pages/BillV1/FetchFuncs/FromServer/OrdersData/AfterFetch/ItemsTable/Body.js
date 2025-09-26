let StartFunc = ({ inItemData, inAddOnsData }) => {
    let jVarLocalHtmlId = 'ItemNamesBodyId';
    let jVarLocalItemNamesBodyId = document.getElementById(jVarLocalHtmlId);

    const entries = Object.entries(inItemData);

    entries.forEach(([key, value]) => {

        let localAddonArray = value.AddOnArray.map(element => {
            return `${element.AddOnService}`;
        });

        let localAddOnRateArray = value.AddOnArray.map(element => {
            return element.AddOnRate
        }).reduce((a, b) => a + parseInt(b), 0)

        const template = document.getElementById("TemplateForTableRowId");
        const clone = template.content.cloneNode(true);

        let td = clone.querySelectorAll("td");
        //td[0].textContent = value.ItemName+'@'+value.Rate+'@'+localAddonArray.toString();
        td[0].textContent = `${value.ItemName}@${(parseInt(value.Rate) + localAddOnRateArray)}@${localAddonArray.toString()}`;
        td[1].textContent = value.Pcs;
        td[2].textContent = (parseInt(value.Rate) + (localAddOnRateArray)) * (value.Pcs);
        // td[3].textContent = new Date(value.DeliveryDateTime).toLocaleDateString('en-GB');
        td[3].textContent = formatDate(new Date(value.DeliveryDateTime))

        jVarLocalItemNamesBodyId.appendChild(clone);
    });
};

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for single-digit days
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed, so we add 1)
    const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year

    return `${day}/${month}/${year}`;
};

export { StartFunc };