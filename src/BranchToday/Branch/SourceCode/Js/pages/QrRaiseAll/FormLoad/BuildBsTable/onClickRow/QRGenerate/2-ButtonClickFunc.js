import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as AfterFetch } from "./6-AfterFetch.js";

let StartFunc = async ({ inRowData }) => {
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
    }).then(async (result) => {
        if (result.isConfirmed && StartFuncCheckBeforeFetch()) {
            Swal.fire({
                title: "Generating QrCodes...",
                html: "Please wait while we process your request.",
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            let ResponseData = await StartFuncFetchFunc({ inRowData });

            if (ResponseData.status === 200) {
                Swal.close();
                AfterFetch({ inQrCodeData: ResponseData, inRow: inRowData });
            }
        }
    });
};

export { StartFunc };
