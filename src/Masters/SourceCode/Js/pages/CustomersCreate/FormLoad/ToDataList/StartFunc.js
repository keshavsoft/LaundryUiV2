const StartFunc = () => {
    const jVarLocalCustomerData = localStorage.getItem("CustomerNames");
    const jVarLocalCustomerDataAsJson = JSON.parse(jVarLocalCustomerData);

    jVarLocalCustomerDataAsJson.forEach(element => {
        jFLocalAddToItems({ inCustomerName: element.CustomerName });
    });
    
    jVarLocalCustomerDataAsJson.map(element => element.Mobile).forEach(mobile => {
        jFLocalMobileNumber({ inMobile: mobile });
     });  
    

};

const jFLocalAddToItems = ({ inCustomerName }) => {
   
    var option = $('<option value="' + inCustomerName + '"></option>');

    $('#CustomerNameDataListId').append(option);
};

const jFLocalMobileNumber = ({ inMobile }) => {
    var option = $('<option value="' + inMobile + '"></option>');

    $('#MobileNumberDataListId').append(option); 
};

export { StartFunc };
