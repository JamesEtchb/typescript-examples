let firstName: string = 'James'
let age: number = 31
let active: boolean = true

// let names: string[] = [1,2,3,4] //gives us an error
let names: string[] = ['bobby', 'jennifer', 'lily']

enum studentTypes {
  pending,
  active,
  almostdone,
  graduated,
  tas,
  teachers,
}

const myStatus = studentTypes.tas

//this works
// switch (Number(myStatus)) {
//   case Number(studentTypes.pending):
//     console.log('student is pending')
//     break
//   case Number(studentTypes.almostdone):
//     console.log('student is almost done')
//     break
//   case Number(studentTypes.active):
//     console.log('student is active')
//     break
//   default:
//     console.log('already became a ta or teacher')
// }

// this doesnt work
// const myStatus = studentTypes.tas
// console.log(studentTypes)

// console.log(myStatus)
// if (myStatus === studentTypes.teachers || myStatus == studentTypes.tas) {
//     console.log(`The student is graduated`)
// } else {console.log('The student is still in school')}

// console.log(names)
// console.log(`My first name is ${firstName}, my age is ${age}, and im active: ${active}.`)

// let code: string | number = 11
// code = 'AA11'
// //code = false // error typescript will no let you set something that isnt true

// console.log(`my code is ${code}`)

// function sum(arr: number[]) {
//   return arr.reduce((total, num) => total + num)
// }

// let numbers: number[] = [1, 2, 3, 4, 5, 6]

// console.log(sum(numbers))

// let complexItem: any = {name: 'james'}
// complexItem= {name: 'james', hasDog: true}

// let complexItem= {name: 'james'}
// complexItem.name = 'matt'

// complexItem = { title: 'student'}
// complexItem = 'its a string'
// complexItem = 22

// console.log('complexItem', complexItem)

import { bloodType, human } from "./random"


const me: human = {
    name: 'james',
    age: 15 * 16,
    height: 5.11,
    // bloodType: bloodType.oPositive,
}

console.log(me)