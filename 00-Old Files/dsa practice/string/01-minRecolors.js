export const minRecolors = (s, k) => {
  let minRecolor = k;
  let countWhite = 0;
  for (let i = 0; i < k; i++) {
    if (s[i].toLowerCase() === "w") countWhite++;
  }

  minRecolor = countWhite;
  for (let j = k; j < s.length; j++) {
    if (s[j - k].toLowerCase() === "w") countWhite--;
    if (s[j].toLowerCase() === "w") countWhite++;

    minRecolor = Math.min(minRecolor, countWhite);
  }
  return minRecolor;
};
