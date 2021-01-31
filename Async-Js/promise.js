const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Not Loffed In"))
    },2000)
})

promise
    .then(text => {
    console.log(text)
})
    .catch(err => console.log(err.message))