"use strict";
exports.__esModule = true;
var firstName = 'James';
var age = 31;
var active = true;
// let names: string[] = [1,2,3,4] //gives us an error
var names = ['bobby', 'jennifer', 'lily'];
var studentTypes;
(function (studentTypes) {
    studentTypes[studentTypes["pending"] = 0] = "pending";
    studentTypes[studentTypes["active"] = 1] = "active";
    studentTypes[studentTypes["almostdone"] = 2] = "almostdone";
    studentTypes[studentTypes["graduated"] = 3] = "graduated";
    studentTypes[studentTypes["tas"] = 4] = "tas";
    studentTypes[studentTypes["teachers"] = 5] = "teachers";
})(studentTypes || (studentTypes = {}));
var myStatus = studentTypes.tas;
var me = {
    name: 'james',
    age: 15 * 16,
    height: 5.11
};
console.log(me);
