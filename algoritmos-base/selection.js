function random(qnt) {
    let arr = []
    let cont = 0
    while (cont<10) {
        arr.push(Math.floor(Math.random()*qnt))
        cont++
    }
    return arr
}


function selectionSort(arr) {
    let menor

    for (let i = 0; i < arr.length - 1; i++) {
        menor = i
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j]<arr[menor]){
                menor = j
            }
        }
        if(i != menor){
            [arr[i], arr[menor]] = [arr[menor], arr[i]];
        }
        console.log(arr)
    }
    return arr
}

let rand = random(10)

console.log(rand)
console.log(selectionSort(rand))