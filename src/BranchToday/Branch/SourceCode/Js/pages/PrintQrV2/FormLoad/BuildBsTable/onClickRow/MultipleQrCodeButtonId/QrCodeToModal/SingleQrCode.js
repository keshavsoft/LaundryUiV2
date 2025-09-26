let StartFunc = ({ inData, inRow }) => {
    let jVarLocalDataNeeded = inData;

    let jVarLocalTemplate = document.getElementById("TemplateForQrCodePrint");
    let clone = jVarLocalTemplate.content.cloneNode("true");

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "BranchClass",
        inTextContent: jVarLocalDataNeeded.BookingData.OrderData.BranchName
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "PkClass",
        inTextContent: jVarLocalDataNeeded.location
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "QrCodeClass",
        inTextContent: jVarLocalDataNeeded.UuId
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "OrderNumberClass",
        inTextContent: jVarLocalDataNeeded.OrderNumber
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "ItemNameClass",
        inTextContent: jVarLocalDataNeeded.ItemName
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "ItemSerialClass",
        inTextContent: jVarLocalDataNeeded.ItemSerial
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "AddOnDataAsStringClass",
        inTextContent: jVarLocalDataNeeded.AddOnDataAsString
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "DateTimeClass",
        inTextContent: new Date(jVarLocalDataNeeded.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).split('/').join('-')
    })

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "OrderDateClass",
        inTextContent: new Date(jVarLocalDataNeeded.DeliveryDateTime).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).split('/').join('-')
    });

    let jVarLocalHtmlQrId = clone.getElementById(`CanvasId`);
    console.log("jVarLocalDataNeeded", jVarLocalDataNeeded);

    jVarLocalHtmlQrId.dataset.qrcode = `${jVarLocalDataNeeded.pk}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.pk}-${jVarLocalDataNeeded.OrderNumber}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.BookingData.OrderData.BranchName}-${jVarLocalDataNeeded.location}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.ItemName}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${inRow.AggValues.ItemDetails}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.AddOnDataAsString}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${new Date(jVarLocalDataNeeded.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB')}@${new Date(jVarLocalDataNeeded.DeliveryDateTime).toLocaleDateString('en-GB')}`
    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    return str;
};

let jFLocalTotextContent = ({ inClone, inHtmlClassName, inTextContent }) => {
    let jVarLocalClone = inClone;
    let jVarLocalHtmlClassName = inHtmlClassName;
    let jVarLocalTextContent = inTextContent;

    let jVarLocalFound = jVarLocalClone.querySelector(`.${jVarLocalHtmlClassName}`);
    jVarLocalFound.textContent = jVarLocalTextContent;
};


export { StartFunc };