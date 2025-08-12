/*
  Given a binary string s. You have to count the number of substrings that start and end with 1.
  Examples:
  Input: s = "1111"
  Output: 6
  Explanation: There are 6 substrings from the given string. They are "11", "11", "11", "111", "111", "1111".
*/

export const binarySubstring = (s) => {
  let ones = 0;
  for(const ch of s) if(ch === '1') ones++;

  return (ones * (ones - 1)) / 2;
}

export const BruteForceBinarySubstring = (s) => {
  let res = 0;
  for(let i = 0; i < s.length; i++) {
    const tmp = [];
    for(let j = i; j < s.length; j++) {
      tmp.push(s[j]);
      if(tmp.length > 1 && tmp[0] === '1' && tmp[tmp.length - 1] === '1') res++;
    }
  }

  return res;
}