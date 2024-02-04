"use strict";
let sales = 123456789;
let course = 'typescript';
let isPublished = true;
let level;
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user = [1, 'Mosh'];
var size;
(function (size) {
    size[size["small"] = 2] = "small";
    size[size["medium"] = 4] = "medium";
    size[size["large"] = 6] = "large";
})(size || (size = {}));
let mySize = size.medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
calculateTax(10000, 2023);
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    },
};
employee.name = 'Mosh';
//# sourceMappingURL=index.js.map