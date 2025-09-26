import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";

import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onPostBody = () => {
        StartFuncOnLoadSuccess();
        jFdate();
        $("#TableFooterItemNameId").focus();
    };

    optionsJson.onClickRow = StartFuncOnClickRowFunc;

    StartFuncForColumns({ inColumns: optionsJson.columns })
    // $table.bootstrapTable({
    //     data: [],
    //     onPostBody: function () {
    //         StartFuncOnLoadSuccess();
    //         jFdate();
    //         $("#TableFooterItemNameId").focus();
    //     },
    //     onClickRow: StartFuncOnClickRowFunc
    // });

    $table.bootstrapTable(optionsJson)
};

const jFdate = () => {
    var today = new Date();
    var ddToday = String(today.getDate()).padStart(2, '0');
    var mmToday = String(today.getMonth() + 1).padStart(2, '0');
    var yyyyToday = today.getFullYear();
    var formattedToday = yyyyToday + '-' + mmToday + '-' + ddToday;

    today.setDate(today.getDate() + 7);
    var ddNextWeek = String(today.getDate()).padStart(2, '0');
    var mmNextWeek = String(today.getMonth() + 1).padStart(2, '0');
    var yyyyNextWeek = today.getFullYear();
    var formattedNextWeek = yyyyNextWeek + '-' + mmNextWeek + '-' + ddNextWeek;

    let jVarLocalTableFooterdateInputId = document.getElementById('TableFooterdateInputId');

    if (jVarLocalTableFooterdateInputId === null === false) {
        jVarLocalTableFooterdateInputId.value = formattedNextWeek;
        jVarLocalTableFooterdateInputId.setAttribute("min", formattedToday);

    };
};

export { StartFunc };
