import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async ({ inRowData }) => {
    var jVarLocalRow = inRowData;

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
        focusCancel: true,
        focusButtonColor: "#0000ff"
    }).then((result) => {
        if (result.isConfirmed) {
            if (StartFuncCheckBeforeFetch()) {
                StartFuncFetchFunc({
                    inRow: jVarLocalRow
                }).then(ResponseData => {
                    if (ResponseData) {
                        StartFuncAfterFetch({ inQrCodeData: ResponseData, inRow: jVarLocalRow });
                    };
                });
            };
        }
    });
};

export { StartFunc };