let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
    inFindColumn.footerFormatter = totalPriceFormatter;
};

function jFLocalOptsFormater(value, row, index) {
    let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
    let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
    let jVarLocalItemSerial = row.ItemSerial;
    let jVarLocalFilterData = Object.values(JvarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    if (jVarLocalFilterData.length > 0) {
        let jVarLocalAddOnPrice = jVarLocalFilterData.map(e => e.AddOnRate).reduce((a, b) => a + b, 0);
        return (jVarLocalAddOnPrice * row.Pcs) + row.Total
    } else {
        return row.Total;
    };
};

function totalPriceFormatter(data) {
    var field = this.field
    return '₹ ' + data.map(function (row) {
        return +row.Total
    }).reduce(function (sum, i) {

        return sum + i
    }, 0)
}

export { StartFunc };