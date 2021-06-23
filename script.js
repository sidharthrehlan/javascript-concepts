if (window.Worker) {
  var myWorker = new Worker("myworker.js");
}
function showTotal() {
  console.log("post msg in main thread");
  myWorker.postMessage("startCounter");

  myWorker.onmessage = function (e) {
    // result.textContent = e.data;
    console.log("Message received from worker");
    document.querySelector("#totalValue").innerHTML = e.data;
  };
}

function showText() {
  document.querySelector("#showText").innerHTML = "sidharth";
}
