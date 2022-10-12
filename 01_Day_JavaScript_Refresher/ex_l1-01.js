// Exercise 1
const arr1 = []
console.log('1:', arr1, '\n');

// Exercise 2
const arr2 = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log('2:', arr2, '\n');

// Exercise 3
let a2Len =  arr2.length;
console.log('3:', a2Len, '\n');

// Exercise 4
var a2First = arr2[0];
var a2Last = arr2[arr2.length - 1];
function getMid(array) {
    let mid = array.length / 2;
    if (mid % 2 == 0) {
        // console.log(mid, mid + 1);
        return [mid, mid + 1];
    }
    else{
        return Math.floor(mid);
    }
}
const midVal = getMid(arr2)
console.log(
    '4:',
    'First:', a2First, 
    '\nLast:', a2Last
);
if (typeof midVal == "object"){
    const [first, second] = midVal
    console.log('Middle:',arr2[first], arr2[second], '\n');
} else{ 
    const a2Mid = midVal;
    console.log(arr2[a2Mid], '\n');
}

// Exercise 5
const mixedDataTypes = ['ron', 1907, true, 'July', 18, 'female'];
console.log('5:', mixedDataTypes.length, '\n');

// Exercise 6
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Exercise 7
console.log('7:', itCompanies, '\n');

// Exercise 8
console.log('8:', itCompanies.length, '\n');

// Exercise 9
var itCFirst = itCompanies[0];
var itCLast = itCompanies[itCompanies.length - 1];
const itmidVal = getMid(itCompanies)
console.log(
    '9:',
    'First:', itCFirst, 
    '\nLast:', itCLast
);
if (typeof itmidVal == "object"){
    const [first, second] = itmidVal
    console.log('Middle:',itCompanies[first], itCompanies[second], '\n');
} else{ 
    const a2Mid = itmidVal;
    console.log('Middle:', itCompanies[a2Mid], '\n');
}
// Exercise 10
console.log('10:');
let sub;
sub = 'a';
for (const company of itCompanies) {
    console.log(`${sub}-> ${company}`);
    sub = String.fromCharCode(sub.charCodeAt(0) + 1);
}
console.log('\n');

// Exercise 11
console.log('11:');
sub = 'a';
for (const company of itCompanies) {
    console.log(`${sub}-> ${company.toUpperCase()}`);
    sub = String.fromCharCode(sub.charCodeAt(0) + 1);
}
console.log('\n');

// Exercise 12
var editIt = [...itCompanies];
const last = editIt.pop();
const itJoined = editIt.join(', ');
console.log(`12: ${itJoined} and ${last} are big IT companies \n`);

// Exercise 13
let itIndex = itCompanies.indexOf('banana') // 0
itIndex != -1 ? console.log('13:', itIndex, '\n') : console.log('13: not found\n')

// Exercise 14
let dupli;
for (const company of itCompanies) {
    function search(str) {
        for(var i = 0; i <= str.length; i++) {
            for(var j = i+1; j <= str.length; j++) {
                if(str[j] == str[i] && str[j] == 'o') {
                    // console.log(`${str}`);
                    dupli += `${str}, `;
                    return false;
                }
            }
        }
    }
    search(company);
}
var du = dupli.split(',');
var du1 = dupli.split(',')[0];
var due = du1.substr(9);
dupli = [due, ...du.splice(1, 2)];
console.log('14:', dupli.toString());

// Exercise 15
var sorted = itCompanies.sort();
console.log('15:', sorted);

// Exercise 16
var reversed = itCompanies.reverse();
console.log('16:', reversed);

// Exercise 17
sliceF3 = itCompanies.slice(0, 3)
console.log('17:', sliceF3);

// Exercise 18
sliceL3 = itCompanies.slice(itCompanies.length - 3, itCompanies.length)
console.log('18:', sliceL3);

// Exercise 19
var smid = getMid(itCompanies);
if (typeof smid !== "object") {
    var rm = itCompanies.slice(smid, smid + 1)
    console.log('19:', rm);
} else {
    var [f, s] = smid;
    var rm1 = itCompanies.slice(f, f + 1);
    var rm2 = itCompanies.slice(s, s + 1);
    console.log(`19: ${rm1}, ${rm2}`);
}
 
// Excercise 20
itCompanies.shift();
console.log('20:', itCompanies);

// Exercise 21
var spMid = getMid(itCompanies);
if (typeof spMid == "object") {
    var [mid1, mid2] = spMid;
    itCompanies.splice(mid1, 2);
} else{
    itCompanies.splice(spMid, 1)
}
console.log('21:', itCompanies);

// Exercise 22
var pop = itCompanies.pop();
console.log('22:', itCompanies);

// Exercise 23
var clearAll = itCompanies.splice(0);
console.log('23:', itCompanies);