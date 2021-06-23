onmessage = function (e) {
  console.log("message recieved in web worker");
  let i = 0;
  while (i < 10000000000) {
    i++;
  }
  console.log("Posting message back to main script");
  postMessage(i);
};
