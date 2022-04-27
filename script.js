// function myfunction() {
//   var tbl = document.getElementById("add");
//   var row = tbl.insertRow();
//   var cell1 = row.insertcell();
//   var cell2 = row.insertcell();
//   var cell3 = row.insertcell();
//   var cell4 = row.insertcell();
//   var cell5 = row.insertcell();
//   var cell6 = row.insertcell();
//   var cell7 = row.insertcell();
//   cell1.innerHTML = document.getElementsByClassName("fn").value;
//   cell2.innerHTML = document.getElementsByClassName("ln").value;
//   cell3.innerHTML = document.getElementsByClassName("list").value;
//   cell4.innerHTML = document.getElementsByClassName("goal").value;
//   cell5.innerHTML = document.getElementsByClassName("in").value;
//   cell6.innerHTML = document.getElementsByClassName("field").value;
//   cell7.innerHTML = "Edit/Delete";
// }
// console.log(myfunction);
let btnadd = document.querySelector('.submit');
let table = document.querySelector('table');

let fname = document.querySelector('#fn');
let lname = document.querySelector('#ln');
let occ = document.querySelector('#list');
let wfh = document.querySelector('#goal');
let int = document.querySelector('#in');
let fd = document.querySelector('#field');

let submitBtn = document.querySelector('.submitBtn');

table.addEventListener('click', (e) => {
  console.log(e);
});

submitBtn.addEventListener('click', (e) => {
  //   e.stopImmediatePropagation();
  //   e.stopPropagation();

  let fnm = fname.value;
  let lnm = lname.value;
  let oc = occ.value;
  let wf = wfh.value;
  let ine = int.value;
  let fe = fd.value;

  let template = `
  <tr id ='1'>
  <td>${fnm}</td>
  <td>${lnm}</td>
  <td>${oc}</td>
  <td>${wf}</td>
  <td>${ine}</td>
  <td>${fe}</td>
  <td><button class="edit-row-1">edit</button></td>
  </tr>
  `;
  table.innerHTML += template;
});
