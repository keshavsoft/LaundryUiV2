import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onPostBody: function () {
            StartFuncOnLoadSuccess();
            jFdate();
            $("#TableFooterItemNameId").focus();
        },
        onClickRow: StartFuncOnClickRowFunc
    });
};

const jFdate = () => {
    // var sevenDaysAgo = new Date();
    // sevenDaysAgo.setDate(sevenDaysAgo.getDate() + 7);

    // var formattedSevenDaysAgo = sevenDaysAgo.getFullYear() + '-' + ((sevenDaysAgo.getMonth() + 1) < 10 ? '0' : '') + (sevenDaysAgo.getMonth() + 1) + '-' + (sevenDaysAgo.getDate() < 10 ? '0' : '') + sevenDaysAgo.getDate();

    // document.getElementById('TableFooterdateInputId').value = formattedSevenDaysAgo;
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

        var dateInput = document.getElementById("TableFooterdateInputId");
        dateInput.value = formattedNextWeek;
        dateInput.setAttribute("min", formattedToday);
    // document.getElementById("TableFooterdateInputId").setAttribute("min", today); 
    // document.getElementById("TableFooterdateInputId").value = today; 
};

export { StartFunc };
