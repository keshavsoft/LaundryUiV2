import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = () => {
    
    const selectedOption = document.getElementById("AddItemsHtmlId").value;

    if (selectedOption === "AddRight") {
        window.location.href = "./AddItemsTotalRight.html";
    } else if (selectedOption === "AddBottom") {
        window.location.href = "./AddItemsButtom.html";
    } 
};

export { StartFunc };