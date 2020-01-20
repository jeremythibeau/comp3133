function makeUpperCase(words){
    const upperPromise = new Promise((resolve, reject) => {
        for(var item in words){
            if (/[^a-zA-Z]/.test(words[item])){
                reject(new Error('Not all the words are strings!'))
                break
            }
            words[item] = words[item].toUpperCase()
        }
        resolve(words)
    })
    return upperPromise
}

function sortWords(words){
    const sortPromise = new Promise((resolve, reject) =>{
        for(var item in words){
            if (/[^a-zA-Z]/.test(words[item])){
                reject(new Error('Not all the words are strings!'))
                break
            }
        }
        resolve(words.sort())
    })
    return sortPromise
}


makeUpperCase(['jaxx', 'tiny', 'clay', 1])
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))