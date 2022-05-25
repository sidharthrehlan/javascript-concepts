document.getElementById('title').innerHTML = 'Promise';

var promise = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve('foo');
  }, 1000);
});

promise
  .then((successMsg) => {
    console.log('success1', successMsg);
  })
  .then((successMsg) => {
    console.log('success1', successMsg);
  })
  .then((successMsg) => {
    console.log('success1', successMsg);
  })
  .catch((error) => {
    console.log('errormsg', error);
  });
