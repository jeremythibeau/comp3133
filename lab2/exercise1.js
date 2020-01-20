function compareNumToTen(num) {
    const comparePromise = new Promise((resolve, reject) =>{
        if(num > 10)
        {
            console.log('calculating the promise...')
            resolve(num + ' is greater than 10, success!')
        }

        reject(new Error(num + ' is less than 10, error!'))
    })
    const onResolved = (resolvedValue) => console.log(resolvedValue);
    const onRejected = (rejectedValue) => console.log(rejectedValue);


    comparePromise.then(onResolved)
    .catch(onRejected)
}

compareNumToTen(4)

/*.then((resolvedValue) =>{
    console.log(resolvedValue);
}, (rejectedValue) => {
    console.log(rejectedValue);
});
*/
