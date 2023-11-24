const names = [
    'Abdul',
    'Azeem',
    'beigh',
    2040-1995,
    ["john","jonas",'lewis']
];

const types= [];
const _types= [];

for (let i=0;i < names.length; i++){
    console.log(names[i],typeof names[i]);
    types[i] = typeof names[i];
    _types.push(typeof names[i]);
}
console.log(types);
console.log(_types);

const years = [1990,1991,1992,1993,1994,1995];
const age = [];

for (let i = 0 ; i< years.length;i++){
    age.push(2040-years[i]);
}
console.log(age);

// continue statement
console.log("-----------ONLY numbers------------");
for(i=0;i<names.length;i++){
    if(typeof names[i] !='number')continue;
    console.log(names[i],typeof names[i]);
}
console.log("-----------ONLY strings------------");
for(i=0;i<names.length;i++){
    if(typeof names[i] !='string')continue;
    console.log(names[i],typeof names[i]);
}

//break statement
console.log("-----------ONLY numbers------------");
for(i=0;i<names.length;i++){
    if(typeof names[i] !='number')break;
    console.log(names[i],typeof names[i]);
}
console.log("-----------ONLY numbers------------");
for(i=0;i<names.length;i++){
    if(typeof names[i] !='string')break;
    console.log(names[i],typeof names[i]);
}

