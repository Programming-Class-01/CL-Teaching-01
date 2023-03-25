// import { LOADIPHLPAPI } from "dns";
// import { exit } from "process";

// {
//     const predictions = {
//         past: 1,
//         current: 3,
//         future: 8
//     }

//     // let result;

//     // {

//     //     const loadedModifiers = [3, 4, 2, 7, 1, 7, 9]
//     //     result = loadedModifiers[predictions.current]

//     // }

//     // console.log(`Result: ${result}`);
// }

// const thisObject = {
//     mine: [
//         1, 2, 3, 4
//     ],

//     yours: [
//         2, 4, 6, 8
//     ]
// }

// const orniArray = [
//     {
//         name: `Test`,
//         age: `12`
//     },
//     {
//         name: "value",
//         age: "number"
//     }
// ]
// console.log(orniArray[0]?.name);

// if (orniArray[4]?.name !== undefined) {
//     console.log(orniArray[4].name);
// }

// const x = 2;
// if (orniArray.length > x) {
//     console.log(`Last Value: ${orniArray[x]?.name}`)
// } else {
//     console.log("Array out of bounds")
// }


// if (orniArray.length < x) {
//     console.log("Array out of bounds")
//     exit();
// }
// console.log(`Last Value: ${orniArray[x]?.name}`)

// const predictions = {
//     past: 1,
//     current: 3,
//     future: 8
// }


function getModifier(inputValue: number): number {
    const loadedModifiers = [3, 4, 2, 7, 1, 7, 9]
    // if (typeof inputValue !== "number") {
    //     console.log("InputValue is not a number.")
    //     return -1;
    // }
    // if (Number.isNaN(inputValue)) return -1;

    // if (loadedModifiers.length <= inputValue) {

    //     console.log(`Input Value is too large. InputValue: ${inputValue} Array Length: ${loadedModifiers.length}`)
    //     return -1;
    // }

    // if (inputValue < 0) {
    //     return -1;
    // }


    let result = loadedModifiers[inputValue]
    if (result === undefined) { 
        console.log("The result was not found in loadedModifiers.")
        result = -1;
    }
    return result;

}

console.log(getModifier(1.5));