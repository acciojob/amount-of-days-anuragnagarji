//your JS code here. If required.
let year=prompt();
function daysOfAYear(y) {
	if(((y%4==0)&&(y%100!=0))||y%400==0){
		return 366;
	}
	return 365;
} 
alert(daysOfAYear(Number(year)));