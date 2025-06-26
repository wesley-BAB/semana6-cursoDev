/*
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Deu tudo ok!')
    }, 3000)
})

async function funcaoAsync (){
    console.log('Aguardando 3 ssegundos ')
    const msg = await promise
    console.log(msg)
}
funcaoAsync() 
*/

function promise(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Concluído após 3 segundos ")
        }, 3000)
    })
} 

async function execucao(){
    console.log("Aguardando...")
    const resultado = await promise()
    console.log(resultado)
}

execucao()
