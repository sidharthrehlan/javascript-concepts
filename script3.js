//MyPromise Class

function MyPromise(executor) {
  let onResolve;
  let onReject;
  let isFullfilled = false;
  let isCalled = false;
  let isRejected = false;
  let value;
  let error;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === 'function' && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === 'function' && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFullfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };

  executor(resolve, reject);
}

//Static functions
MyPromise.resolve = (val) => {
  //return promise
  return new MyPromise((resolve, reject) => {
    resolve(val);
  });
};

MyPromise.reject = (reason) => {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};

MyPromise.all = (promises) => {
  return new MyPromise((resolve, reject) => {
    let cnt = 0;
    let res = [];
    if (promises.length === 0) {
      resolve(promises);
      return;
    }

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((val) => {
          done(val, i);
        })
        .catch((err) => reject(err));
    }

    function done(val, i) {
      res[i] = val;
      ++cnt;
      if (promises.length === cnt) {
        resolve(res);
      }
    }
  });
};

//My promise usage

// let promise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 1000);
// });

// promise
//   .then((successResponse) => {
//     console.log(successResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//promise all example
const promise1 = MyPromise.resolve(3);
//const promise2 = 42;
const promise3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('successs');
  }, 1000);
});

MyPromise.all([promise1, promise3]).then((values) => {
  console.log(values);
});
