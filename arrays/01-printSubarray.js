export function printSubarrays1(arr) {
  const n = arr.length;
  const res = [];

  for(let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let tmp = [];
      for (let k = i; k <= j; k++) {
        tmp.push(arr[k]);
      }
      res.push(tmp);
    }
  }

  return res;
}

export function printSubarrays2(arr) {
  const n = arr.length;
  const res = [];
  for(let i = 0; i < n; i++) {
    let tmp = [];
    for(let j = i; j < n; j++) {
      tmp.push(arr[j]);
      res.push([...tmp]);
    }
  }

  return res;
}

