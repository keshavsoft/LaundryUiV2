let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = priceFormatter;
};

function priceFormatter(data) {
    var field = this.field
    return '₹ ' + data.map(function (row) {
        return +row.AggValues.SettlementAmount
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

export { StartFunc };