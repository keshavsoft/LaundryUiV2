import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = () => {
    // window.location = "AddItemsV1.html";
    window.location = ConfigJson.Urls.NewOrderButtonId.RedirectUrl['200Status'];
};

// document.getElementById("AddItemsButtonId").addEventListener("click", function () {
//     const selectedOption = document.getElementById("AddItemsHtmlId").value;

//     switch (selectedOption) {
//         case "AddRight":
//             window.location.href = "AddItemsTotalRight.html";
//             break;

//         case "AddBottom":
//             window.location.href = "AddItemsButtom.html";
//             break;

//         default:
//             console.warn("Invalid option selected.");
//             break;
//     }
// });

export { StartFunc };