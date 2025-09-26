let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = ItemsFormatter;
};

function ItemsFormatter(data) {
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