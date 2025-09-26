let StartFunc = ({ inData }) => {
   
   jFLocalToInputpkId({ inValue:inData.pk });
    jFLocalToInputCustomerName({ inValue:inData.CustomerName });
    jFLocalToInputCustomerMobileNumber({ inValue:inData.Mobile });
    jFLocalToInputdob({ inValue:inData.DOB });
    jFLocalToInputCustomerLocation({ inValue:inData.City });
    jFLocalToInputCustomerOccupation({ inValue:inData.Occupation });
    jFLocalToInputCustomerCompany({ inValue:inData.CompanyName });
    jFLocalToInputCustomerGST({ inValue:inData.GSTNumber });

};

let jFLocalToInputpkId = ({inValue}) => {
   let jVarLocalHtmlId = 'pkId';
  let jVarLocalCustomerName = document.getElementById(jVarLocalHtmlId);
  
  if (jVarLocalCustomerName === null === false) {
     jVarLocalCustomerName.value = inValue;
  };
};

let jFLocalToInputCustomerName = ({inValue}) => {
    let jVarLocalHtmlId = 'CustomerName';
   let jVarLocalCustomerName = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCustomerName === null === false) {
      jVarLocalCustomerName.value = inValue;
   };
};

let jFLocalToInputCustomerMobileNumber = ({inValue}) => {
    let jVarLocalHtmlId = 'CustomerMobileNumber';
   let jVarLocalCustomerMobileNumber = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCustomerMobileNumber === null === false) {
      jVarLocalCustomerMobileNumber.value = inValue;
   };
};

let jFLocalToInputdob = ({inValue}) => {
    let jVarLocalHtmlId = 'dob';
   let jVarLocaldob = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocaldob === null === false) {
      jVarLocaldob.value = inValue;
   };
};

let jFLocalToInputCustomerGST = ({inValue}) => {
    let jVarLocalHtmlId = 'CustomerGST';
   let jVarLocalCustomerGST = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCustomerGST === null === false) {
      jVarLocalCustomerGST.value = inValue;
   };
};

let jFLocalToInputCustomerLocation = ({inValue}) => {
    let jVarLocalHtmlId = 'CustomerLocation';
   let jVarLocalCustomerLocation = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCustomerLocation === null === false) {
      jVarLocalCustomerLocation.value = inValue;
   };
};

let jFLocalToInputCustomerOccupation = ({inValue}) => {
    let jVarLocalHtmlId = 'CustomerOccupation';
   let jVarLocalCustomerOccupation = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCustomerOccupation === null === false) {
      jVarLocalCustomerOccupation.value = inValue;
   };
};

let jFLocalToInputCustomerCompany = ({inValue}) => {
    let jVarLocalHtmlId = 'CustomerCompany';
   let jVarLocalCustomerCompany = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCustomerCompany === null === false) {
      jVarLocalCustomerCompany.value = inValue;
   };
};
export { StartFunc };