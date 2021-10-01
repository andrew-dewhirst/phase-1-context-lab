function createEmployeeRecord([firstName,lastName,title,payRate]){
    let employee = {
      firstName: firstName,
      familyName: lastName,
      title: title,
      payPerHour: payRate,
      timeInEvents:[],
      timeOutEvents:[]
    }
    return employee
  };

  function createEmployeeRecords(arrayOfNames){
    return arrayOfNames.map(array => {
    let records = createEmployeeRecord(array)
    return records
    })
  };

  function createTimeInEvent(timestamp){
    this.timeInEvents.push ({
      type: "TimeIn",
      date: timestamp.split(" ")[0],
      hour: parseInt(timestamp.split(" ")[1], 10)
      })
      return this
  };

  function createTimeOutEvent(timestamp){
    this.timeOutEvents.push ({
      type: "TimeOut",
      date: timestamp.split(" ")[0],
      hour: parseInt(timestamp.split(" ")[1], 10)
    })
    return this
  };

  function hoursWorkedOnDate(date){
    let startingHourByDate = this.timeInEvents.filter(user => user.date.startsWith(date));
    let endingHourByDate = this.timeOutEvents.filter(user => user.date.startsWith(date));
    let totalHoursWorked = (endingHourByDate[0].hour - startingHourByDate[0].hour)/100
  
    return totalHoursWorked;
  };

  function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this,date);
    return hoursWorked * this.payPerHour
  };

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray,firstName){
    const employeeFinder = srcArray.filter(employee => firstName == employee.firstName)
    return employeeFinder[0];
};

function calculatePayroll(allEmployees){
    let totalWages = allEmployees.map(employee => allWagesFor.call(employee));
    let reducer = (firstValue,nextValue) => firstValue + nextValue;
      let companyPayroll = totalWages.reduce(reducer,0);
     return companyPayroll;
    };
