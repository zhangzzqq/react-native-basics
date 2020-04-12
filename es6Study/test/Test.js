// var func = () => ({foo: 1});
// console.log(func());


// var simple = a => a > 15 ? 15 : a; 
// simple(16); // 15
// simple(10); // 10

var fact = (x) => ( x==0 ?  1 : x*fact(x-1) );
// var fact = (x) => {return ( x==0 ?  1 : x*fact(x-1) )};

console.log(fact(2));