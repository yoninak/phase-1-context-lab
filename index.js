/* Your Code Here */

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

function createEmployeeRecord(array){

return {
    firstName: array[0],
    familyName: array[1],
    title:array[2],
    payPerHour: array[3],
    timeInEvents:[],
    timeOutEvents:[]

}
}

function createEmployeeRecords(array){
  const newArray =  array.map(x => createEmployeeRecord(x))
return newArray
}

function createTimeInEvent(time){


    let timeComponent = time.split(" ")
    
    let event = {
        type: "TimeIn",
        hour: parseInt(timeComponent[1]),
        date: timeComponent[0]

    }
    
    this.timeInEvents.push(event)

    return this 
}

function createTimeOutEvent(time){


    let timeComponent = time.split(" ")
    
    let event = {
        type: "TimeOut",
        hour: parseInt(timeComponent[1]),
        date: timeComponent[0]

    }
   
    this.timeOutEvents.push(event)

    return this 
}

function hoursWorkedOnDate(date){
 let dateIn = this.timeInEvents.find(x =>{ 
  return  x.date === date 
 })


let dateOut = this.timeOutEvents.find(x =>{ 
    return  x.date === date 
   })
  let hours = (dateOut.hour - dateIn.hour)

  return hours/100
}
 function wagesEarnedOnDate(date){
   return  this.payPerHour * hoursWorkedOnDate.call(this, date)
}
function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find((employeeRecord)=> employeeRecord.firstName == firstName)
    
}

function calculatePayroll(array){
   const initialValue = 0
return array.reduce((accum, initialValue) => accum + allWagesFor.call(initialValue),initialValue)
}