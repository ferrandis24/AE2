let dataArray = [5, 5]

function average(dataArray) {
    console.log(dataArray.reduce((x, y) => (
        x + y
    ), ) / dataArray.length)
}
average(dataArray)

