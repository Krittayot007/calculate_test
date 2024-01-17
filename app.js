function calculate(input) {
  const obj = { A: 1, B: 5, Z: 10, L: 50, C: 100, D: 500, R: 1000 };
  const arr = input.split("");
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let check = arr[i] + arr[i + 1];
    if (check == "AB") {
      sum += 4;
      i++;
    } else if (check == "AZ") {
      sum += 9;
      i++;
    } else if (check == "ZL") {
      sum += 40;
      i++;
    } else if (check == "ZC") {
      sum += 90;
      i++;
    } else if (check == "CD") {
      sum += 400;
      i++;
    } else if (check == "CR") {
      sum += 900;
      i++;
    } else {
      sum += obj[arr[i]];
    }
  }
  return sum;
}

console.log(calculate("LBAAA"));
