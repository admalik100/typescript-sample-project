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
