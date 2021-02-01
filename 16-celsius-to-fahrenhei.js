function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C');
  const fahrenheitExists = degree.toUpperCase().includes('F');

  // Fluxo de erro
  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identiicado');
  }

  // Fluxo Ideal F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C';

  // Fluxo Alternativo C -> F
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32;
    degreeSign = 'C';
  } 

  return formula(updateDegree) + degreeSign;
}

try {
  console.log(transformDegree('50F'));
} catch (error) { 
  console.log(error.message);
}