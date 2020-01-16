// var person = {
//     type: 'human',
//     getName: function () {
//         return this.name;
//     }
// };
//
// var student = {
//     name: 'Billy',
//     age: 20,
//     setAge: function (age) {
//         this.age = age;
//     }
// };
// Object.setPrototypeOf(student, person);
// console.log(student.getName());
//
// for (var key in student) {
//     if (student.hasOwnProperty(key)) {
//         console.info(key);
//     }
// }
//
// var keys = Object.keys(student);
// console.log('keys: ' + keys);
//
// var person = {
//     type: 'person'
// };
// var danny = {
//     name: 'Danny',
//     type: undefined
// };
// Object.setPrototypeOf(danny, person);
// console.log(danny);
//

function Student(name) {
    this.name = name
}
Student.prototype.sleep = function () {
    console.log('Zzz');
};

var billy = new Student('Billy');
billy.sleep();
console.log(Student.prototype);
