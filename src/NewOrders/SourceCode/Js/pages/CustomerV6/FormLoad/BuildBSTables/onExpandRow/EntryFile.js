import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import optionsJson from './options.json' with {type: 'json'};

let StartFunc = (index, row, $detail) => {
    let jVarLocalDataArray = row.AggValues.ItemsArray;
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForItemNames");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");

    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    let jVarLocalInsideTable = $detail.html(str).find('table');

    optionsJson.data = jVarLocalDataArray;
    optionsJson.onExpandRow = StartFuncOnExpandRow;

    jVarLocalInsideTable.bootstrapTable(optionsJson);
};

let StartFunc1 = (index, row, $detail) => {
    let jVarLocalDataArray = row.AggValues.ItemsArray;
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForItemNames");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");

    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    let jVarLocalInsideTable = $detail.html(str).find('table');

    jVarLocalInsideTable.bootstrapTable({
        data: jVarLocalDataArray,
        detailView: true,
        onExpandRow: StartFuncOnExpandRow
    });
};

export { StartFunc };