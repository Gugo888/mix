// zamikania
1// function f(a) {
//     return function c(b) {
//         console.log(a);
//     }
// };
// f(1)(2)

2// let count = 0;
// function f() {
//     if(count === 0) {
//         let count = 1;
//         console.log(count);
//     };
//     console.log(count)
// };
// f();

3// for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i);
//     }, 1000);
// };

4// function createIncrement() {
//     let count = 0;
//     function increment() {
//         count++;
//         console.log(count);
//     }

//     let message = `Count is ${count}`;
//     function log() {
//         console.log(message);
//     }

//     return [increment, log];
// }

// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();

5.1// function createStack() {
//     return {
//         items: [],
//         push(item) {
//             this.items.push(item);
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }
// const stack = createStack();
// Object.defineProperty(stack, "items", {
//     writable: false
// });
// stack.items = [10, 100, 1000];
// console.log(stack);
// stack.items.push(58);
// console.log(stack.items);

5.2// function createStack() {
    //         items: [],
    //     return {
    //         push(item) {
    //             this.items.push(item);
    //         },
    //         pop() {
    //             return this.items.pop();
    //         }
    //     };
    // }
    // const stack = createStack();
    // stack.items = [10, 100, 1000];
    // console.log(stack);
    // stack.items.push(58);
    // console.log(stack.items);


6// function sum(sum1, sum2) {
//     if(Number(sum2)) {
//         return sum1 + sum2
//     } else {
//         return function(sum3) {
//             return sum1 + sum3
//         }
//     }
// };
// let x = sum(10);
// console.log(x(10));
// console.log(x(30));
// console.log(x(50));

function f() {
    console.log('barev dzez')
}
