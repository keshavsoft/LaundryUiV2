let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = symbolFormatPrice;
};

function symbolFormatPrice(data) {
    var field = this.field
    return "₹ " + data;

}

export { StartFunc };