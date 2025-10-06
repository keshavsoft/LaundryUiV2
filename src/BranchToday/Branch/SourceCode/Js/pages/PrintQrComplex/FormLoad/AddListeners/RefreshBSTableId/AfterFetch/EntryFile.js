let StartFunc = (inData) => {
    var $table = $('#table');
    let jVarLocalFilterData = inData.filter(e => e.IsQrCodesRaised === true)

    $table.bootstrapTable("load", jVarLocalFilterData);
};

export { StartFunc };