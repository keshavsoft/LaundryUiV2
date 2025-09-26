let StartFunc = () => {
    jFBranchNameId();
    jFShowToday();
};

let jFBranchNameId = () => {
    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarLocalBranchName;
    };
};

const jFShowToday = () => {
    var today = new Date();
    var ddToday = String(today.getDate()).padStart(2, "0");
    var mmToday = String(today.getMonth() + 1).padStart(2, "0");
    var yyyyToday = today.getFullYear();
    var formattedToday = yyyyToday + "-" + mmToday + "-" + ddToday;
  
    today.setDate(today.getDate() + 7);
    var ddNextWeek = String(today.getDate()).padStart(2, "0");
    var mmNextWeek = String(today.getMonth() + 1).padStart(2, "0");
    var yyyyNextWeek = today.getFullYear();
    var formattedNextWeek = yyyyNextWeek + "-" + mmNextWeek + "-" + ddNextWeek;
  
    var dateInput = document.getElementById("TableFooterdateInputId");
    dateInput.setAttribute("min", formattedToday);
    if (dateInput) {
      dateInput.setAttribute("min", formattedToday);
      const LocalDeliveryDateTime = JSON.parse(
        localStorage.getItem("DeliveryDateTime")
      );
      if (LocalDeliveryDateTime) {
        dateInput.value = LocalDeliveryDateTime;
      } else {
        dateInput.value = formattedNextWeek;
      }
    }
  };

export { StartFunc, jFShowToday }