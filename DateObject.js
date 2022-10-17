// Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word get because it provide the information. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()


//1). Creating a time object
// Once we create time object. The time object will provide information about time. Let us create a time object

const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
// We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table.


// Getting full year
// Let's extract or get the full year from a time object.

// const now = new Date()
console.log(now.getFullYear()) // 2020