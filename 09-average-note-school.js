/*
    Exercicio Nota Escola
    Obter a média a partir de um array

    0-59: F
    60-69: D
    70-79: C
    80-89: B
    90-100: A
*/ 

const studentNotes = [70, 70, 70]
console.log(averageStudent(studentNotes));

function averageStudent(notes){
    const average = calculateAverage(notes)
    if (average < 59) return 'F';
    if (average < 69) return 'D';
    if (average < 79) return 'C';
    if (average < 89) return 'B';
    return 'A';
}

function calculateAverage(studentNotes){
    let sum = 0;
    for(let value of studentNotes){
        sum += value;
    }
    return sum / studentNotes.length;
}
