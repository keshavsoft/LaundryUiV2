let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = priceFormatter;
    inFindColumn.formatter = jFLocalQrCodeDetails;
};

function priceFormatter(data) {
    var field = this.field
    return '₹ ' + data.map(function (row) {
        return +row.AggValues.SettlementAmount
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

function jFLocalQrCodeDetails(value, row, index) {
    console.log("row", row);

    if (row.AggValues.SettlementAmount) {
        return [
            `<a href="#">`,
            `</a>`, '₹ ',
            `${row.AggValues.SettlementAmount}`,
        ].join('')
    }
};

export { StartFunc };