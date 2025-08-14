export const totalFine = (date, car, fine) => {
  const evenDate = date % 2 === 0;

  let totalFineEvenDate = 0;
  let totalFineOddDate = 0;

  for (let i = 0; i < car.length; i++) {
    const evenCar = car[i] % 2 === 0;

    if (evenCar) {
      totalFineEvenDate += fine[i];
    } else {
      totalFineOddDate += fine[i];
    }
  }

  return evenDate ? totalFineOddDate : totalFineEvenDate;
};
