let StartFunc = () => {
    // jFRefesh();
    Swal.fire({
        icon: 'success',
        title: 'Raised',
        text: ' QrCodes raised successfully'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = new URL(window.location.href);
            const params1 = new URLSearchParams(url.search);
            let NewURl = new URL("./PrintQr.html", url);
            const new_url = new URL(`${NewURl.href}?${params1}`);
            window.location.href = new_url.href;
        }
    });
};

// const jFRefesh = () => {
//     let jVarLocalHtmlId = 'RefreshBSTableId';
//     let jVarLocalRefreshBSTableId = document.getElementsByClassName(jVarLocalHtmlId);
//     jVarLocalRefreshBSTableId.click();
// }

export { StartFunc };