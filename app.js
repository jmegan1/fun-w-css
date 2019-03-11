var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

//get the month of the date (0 - 11)
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()) {
  console.log("birthdays are equal");
} else {
  console.log("birthdays are not equal");
}
