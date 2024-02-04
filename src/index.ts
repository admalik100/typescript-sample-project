// in Typescript a large number's digits can be separated via adding a underscore for better readability
let sales: number = 123_456_789;
let course: string = 'typescript';
let isPublished: boolean = true;
// if a variable is not initialized and has no type defined -> Typescript maps it to the "any" type
// should be avoided since it can be assigned values same as in JS (no type check)
let level;
level = 1;
level = 'a';

function render(document: any) {
  console.log(document);
}

// --------Arrays

let numbers: number[] = [1, 2, 3];

// ----------Tuples
// can have multi type data in it -> Use case store a user who has an id and a name
// 1, 'Mosh'

let user: [number, string] = [1, 'Mosh'];

// ------=Enums
// const small: number = 1;
// const medium: number = 2;
// const large: number = 3;

// another way is by enum -> By default TS sets values to them as 0 , 1 ,2 , we can explicity specify values though
enum size {
  small = 2,
  medium = 4,
  large = 6,
}

// const enum size {
//     small = 2,
//     medium = 4,
//     large = 6,
//   }

let mySize: size = size.medium;
console.log(mySize);

// functions

// function calculateTax(income: number, taxYear?: number): number {
//   if ((taxYear || 2022) < 2022) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);
calculateTax(10_000, 2023);
