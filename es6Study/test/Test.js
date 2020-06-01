let promise = new Promise((resolve, reject)=>{
    reject("拒绝了");
    resolve("又通过了");
});
promise.then((data)=>{
    console.log('success' + data);
}, (error)=>{
    console.log(error)
});


