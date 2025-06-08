const string1 = 'I am a Python Developer. Python is an open-source';
const replaced = string1.replace('Python', 'Javascript'); // only first instance gets replaced
console.log(replaced);

const string2 = 'I am a Python Developer. Python is an open-source';
const replacedAll = string2.replaceAll('Python', 'JavaScript'); // all instance gets replaced
console.log(replacedAll);
