export const sumExpenseWeek = function (arr) {
  const sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum;
};
