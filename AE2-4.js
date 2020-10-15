let values = [20,76,46,2,7];
let num = 100;

function findGreaterThan(x, y) {
    return x.every((f) => ( f < y ))
}
console.log(findGreaterThan(values, num))
