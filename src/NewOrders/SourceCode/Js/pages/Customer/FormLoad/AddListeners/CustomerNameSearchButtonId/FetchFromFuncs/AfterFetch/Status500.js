let StartFunc = (inData) => {
    var $table = $('#table');
  var $tableYesterdayTableId = $("#YesterdayTableId");
  var $tableThisWeekTableId = $("#ThisWeekTableId");
  var $tableAllTableId = $("#AllTableId");


    $table.bootstrapTable("load", []);
    $tableYesterdayTableId.bootstrapTable("load", []);
    $tableThisWeekTableId.bootstrapTable("load", []);
    $tableAllTableId.bootstrapTable("load", []);
};

export { StartFunc };
