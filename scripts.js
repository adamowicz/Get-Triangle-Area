// function declaration

function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        return 'Nieprawidłowe dane!'
    } else {
        return a * h / 2
    }
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(11, -369);
var triangle3Area = getTriangleArea(0, 12);

console.log('Triangle 1 Area = ' + triangle1Area);
console.log('Triangle 2 Area = ' + triangle2Area);
console.log('Triangle 3 Area = ' + triangle3Area);
