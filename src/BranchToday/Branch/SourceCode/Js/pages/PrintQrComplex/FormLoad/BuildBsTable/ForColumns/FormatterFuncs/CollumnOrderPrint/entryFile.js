let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalQrCodeDetails;
};


function jFLocalQrCodeDetails(value, row, index) {
    if (row.IsQrCodesRaised) {
        return [
            `<a href="./Bill.html?OrderNumber=${row.pk}" target="_blank" class="btn btn-warning">`,
            `<i class="bi bi-printer-fill"></i>`,
            `</a>`
        ].join('')
    }
};

export { StartFunc };