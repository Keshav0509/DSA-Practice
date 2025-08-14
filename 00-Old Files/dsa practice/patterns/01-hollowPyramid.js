export const hollowPyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    const spacesBefore = ' '.repeat(n - i);
    if (i === 1) {
      console.log(spacesBefore + '*');
    }else if (i === n) {
      console.log('*'.repeat(2 * n - 1));
    }else{
      const spacesBetween = ' '.repeat(2 * i - 3);
      console.log(spacesBefore + '*' + spacesBetween + '*');
    }
  }
}