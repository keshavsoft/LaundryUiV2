import { StartFunc as StartFuncShowOnModal } from "./ShowOnModal.js";
import ConfigJson from '../../../../Config.json' with {type: 'json'};

const StartFunc = ({ inRow }) => {
    // let jVarLocalDataForTable = jFLocalTransformData({ inItemSerial: parseInt(inRow.pk) });
    let jVarLocalDataForTable = inRow.AddOnArray;
    const jVarLocalAddOnModalId = ConfigJson.ModalIds.AddOnModal;

    var $table = $('#AddOnTable');
    $table.bootstrapTable("load", jVarLocalDataForTable);

    StartFuncShowOnModal({ inRow });

    $(`#${jVarLocalAddOnModalId}`).modal("show");
};

export { StartFunc };