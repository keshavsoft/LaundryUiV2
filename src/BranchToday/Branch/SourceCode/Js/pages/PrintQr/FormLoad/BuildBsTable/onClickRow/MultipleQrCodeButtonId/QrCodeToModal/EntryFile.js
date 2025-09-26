import { StartFunc as StartFuncSingleQrcode } from "./SingleQrCode.js";

let StartFunc = ({ inData, inRow }) => {
    let jVarLocalDataNeeded = inData;

    let jVarLocalModalBody = document.getElementById("ModalBody");
    jVarLocalModalBody.innerHTML = "";
    jVarLocalDataNeeded.map((element, index) => {
        let jVarLocalQrCount = `${index + 1}/${element.TotalQrCodes}`;
        const str = StartFuncSingleQrcode({ inData: element, inQrCount: jVarLocalQrCount });
        jVarLocalModalBody.innerHTML += str;
    });

    let k1 = document.querySelectorAll("canvas");

    for (let i = 0; i < k1.length; i++) {
        const element = k1[i];
        GenerateQrCodeOnModal({ inQrData: jVarLocalDataNeeded, inCanvasId: element })

    };
    let jVarLocalId = "ModalForQrCode";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};


let GenerateQrCodeOnModal = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 150; // Set desired canvas height
    canvas.width = 150;  // Set desired canvas width
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};
    opts.text = canvas.dataset.qrcode;
    opts.bcid = "qrcode";
    opts.scaleX = 2; // Adjust scale for larger QR code
    opts.scaleY = 2; // Adjust scale for larger QR code
    opts.rotate = "N";

    // Draw the bar code to the canvas
    try {
        let ts0 = new Date;
        bwipjs.toCanvas(canvas, opts);
        show(ts0, new Date);
    } catch (e) {
        console.log("error : ", e);

        return;
    }

    function show(ts0, ts1) {
        canvas.style.visibility = 'visible';
    }
};


export { StartFunc };