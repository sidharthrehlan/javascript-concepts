//infinite sum curring

const sum = (a) => {
  return (b) => {
    if (b) {
      return sum(a + b);
    } else return a;
  };
};

console.log(sum(1)(2)(3)(4)(5)());
