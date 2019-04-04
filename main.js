const companies = [
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987},
    { name: "one", category: "idk", start: 123, end: 987}
]

const ages = [1,2,3,4,5,6,8,9,10]

//foreach
companies.forEach(company => {
    console.log(company);
});

//filter get 21 and older
const canDrink = ages.filter(age => age >= 21);

//filter retail company
const retailCompanies = companies.filter(company => company.category === 'Retail')

//filter all companies from the 80's
const eightiesCompanies = companies.filter(company => company.start > 1979 && company.end < 1990)

//filter all comapnies that lasted 10 years
const lastedEnough = companies.filter(company => (company.end - company.start) >= 10)

//map
//create new array of company names
const companyNames = companies.map(company => `{company.name} [${company.start} - ${company.end}]`)

//square ages
const ages = ages.map(age => Math.sqrt(age))

//square and then times two
const agesSquareTimesTwo = ages
    .map(age => Math.sqrt(age))
    .map(age => age*2)

//sort
const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start) ? 1 : -1);

const ages = ages.sort((a,b) => b-a);

//reduce
//sum all ages
const sumAge = ages.reduce((sum,age) => sum+age,0)

//get total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.end), 0)

//Combine methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a-b)
    .reduce((a,b) => a+b, 0)