let idCounter = 0

export function getData(count, chunk_size) {
    const data = []
    for (let index = 0; index < count; index++) {
        data.push({
            id: String(idCounter++),
            text: 'Box ' + String(idCounter)
        })
    }
    return spliteArray(data, chunk_size)
}

export function resetCounter() {
    idCounter = 0
}

function spliteArray(arr, size) {
    let arrays = []
    while (arr.length > 0) {

        let chunk = arr.splice(0, size)

        arrays.push({
            id: generateId(10),
            chunk
        });
    }
    return arrays
}

// dec2hex :: Integer -> String
// i.e. 0-255 -> '00'-'ff'
function dec2hex(dec) {
    return dec.toString(16).padStart(2, "0")
}

// generateId :: Integer -> String
function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}