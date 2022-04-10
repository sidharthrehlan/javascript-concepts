// let s = 'Hello';

// //o/p ==> {H:1, e:1, l:2, o:1 }//

// const getCharCount = (str) => {
//   let output = {};

//   if (str.length === 0) {
//     return output;
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       let objKeys = Object.keys(output);
//       if (objKeys.(str[i])) {
//         output[str[i]] = output[str[i]] + 1;
//       } else {
//         output[str[i]] = 1;
//       }
//     }
//   }
//   return output;
// };

// getCharCount(s);

// const currency = [
//   { name: 'Singapore', value: 1.35 },
//   { name: 'india', value: 70 },
// ];

// // Input:
// // 2
// // Output
// // const newCurrency = [{name:'Singapore',value:2.70},{name:'india',value:140}]

// const multiplyValueBy = (currObj, value) => {
//   const outputArr = currObj.map((item) => {
//     return {
//       name: item.name,
//       value: item.value * 2,
//     };
//   });
//   return outputArr;
// };

// console.log(multiplyValueBy(currency, 2));

// function printNumbers(){

//     for(var i=0;i<5;i++){

//         setTimeout(()=>console.log(i),1000);

//     }

// }

// printNumbers()

window.addEventListener('popstate', function (event) {
  debugger;
  const leavePage = confirm('you want to go ahead ?');
  if (leavePage) {
    history.back();
  } else {
    history.pushState(null, document.title, location.href);
  }
});
