//////Task 1
let currenciesLenth = 50;
for (let i = 0; i <= currenciesLenth; i++) {
    console.log(i)
}

/////task 2
let a=0
while (a<=20) {
    console.log(a)
    a++
}

/////task 3

let b =0
do {
    console.log(b);
    b++;
} while (b <=30);

///////task 4
const numbers = [1,2,5,7,8,10,23,24,26]
for (let c = 0; c < numbers.length; c++) {
    if (numbers[c] / 2) {
        console.log(numbers[c]) 
    }
    ///////ლუწები სწორად ვერ გამოვიტანე If ით
}
/////task 5
const currentDay = [0,1,2,3,4,5,6];
switch (currentDay) {
    case 0:
        console.log("კვირა")
    case 1:
        console.log("ორშაბათი")
    case 2:
        console.log("სამშაბათი")
    case 3:
        console.log('ოთხშაბათი')
    case 4:
        console.log('ხუთშაბათი')
    case 5:
        console.log('პარასკევი')
    case 6:
        console.log('შაბათი')
}
/////////task 6
const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];

let currenciesLength = currencies.length;

for (let i = 0; i < currenciesLength; i++) {

	if (currencies[i].rate >= 5) {
        console.log(currencies[i].rate,currencies[i].name )
		continue;
	}

}