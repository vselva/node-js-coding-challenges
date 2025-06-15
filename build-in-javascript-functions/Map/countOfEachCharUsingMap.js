
function countEachCharaterinString(inStr) {

    const map = new Map();
    for(let char of inStr) {
        map.set(char, (map.get(char) || 0) + 1);
    } 
    return map;
}

const countChar = countEachCharaterinString('ABBBCCCDDDDEEEFFG');
console.log('Count of each character in string using Map:', countChar);

for([char, count] of countChar) {
    console.log('character:', char, 'count:', count)
}
