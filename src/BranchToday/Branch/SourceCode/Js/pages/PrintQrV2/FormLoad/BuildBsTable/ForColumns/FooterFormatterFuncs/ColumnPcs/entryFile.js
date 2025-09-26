let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = pcsFormatter;
};

let jVarLocalFormatterFunc = (data) => {
    var field = "Rate";
    let LocalTotal = data.map(function (row) {
        if (row[field] === undefined) {
            return 0;
        };
        return +row[field];
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);

    return Math.floor(LocalTotal);

};

function pcsFormatter(data) {
    var field = this.field
    var tPcs = data.map(function (row) {
        return +row.AggValues.ItemDetails.split(' / ')[1]
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
    var tPTpes = data.map(function (row) {
        return +row.AggValues.ItemDetails.split(' / ')[0]
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)

    return `${tPTpes}/${tPcs}`
};

export { StartFunc };