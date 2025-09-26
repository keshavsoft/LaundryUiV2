import { StartFunc as StartFuncAddOnButton } from "./AddOnButton.js";
import { StartFunc as StartFuncDeleteButton } from "./DeleteRow/EntryFile.js";
import { StartFunc as StartFuncAlterRowButton } from "./AlterRow/EntryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === "KS-AddOns") {
        StartFuncAddOnButton({ inRow: row });
    };

    if (field === "KS-Opts") {
        Swal.fire({
            title: "Check",
            text: "Do you really want to Delete Item?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Edit",
            denyButtonText: `Delete`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                StartFuncAlterRowButton({ inItemSerial: row.pk });

            } else if (result.isDenied) {
                StartFuncDeleteButton({ inItemSerial: row.pk });

            }
        });
        // if (window.confirm("Do you really want to Delete Item?")) {
        //     StartFuncDeleteButton({ inItemSerial: row.pk });
        // };
    };
};

export { StartFunc };