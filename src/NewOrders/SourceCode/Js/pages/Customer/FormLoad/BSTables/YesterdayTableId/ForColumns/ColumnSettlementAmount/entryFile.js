let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = priceFormatter;
    inFindColumn.formatter = jFLocalFormatterFunc;
};

const jFLocalFormatterFunc = (value, row, index) => {
    if (value === "") {
        return "";
    };

    return `₹ ${value}`;
};

function priceFormatter(data) {

    return '₹ ' + data.map(function (row) {
        return +row.AggValues.SettlementAmount;
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);
}

export { StartFunc };