// Speed Max - 70 km
// a cada 5km acima do limite voce ganha 1 ponto
// Math.Floor() - para arrebdondamento
// caso pontos maior que 12 - carteira suspendida

let conductorPoints = 0; // Pontos do condutor
let speedVehicle = 200; // Velocidade atual do carro

const speedMax = 70; // Velocidade Maxima permitida

// Regra multa
const finePoints = 1; // Ponto por a cada velocidadeExecedida km/h 
const speedExceeded = 5; // A cada qnt km/h aumenta os pontos

console.log(checkSpeed(speedVehicle));

// Declaring function checkSpeed
function checkSpeed(speed){
    if (speed < 0 || typeof speed !== 'number') {
        return 'Existe algo de errado';
    } else{
        if (speed > speedMax) {
            let calc = Math.floor((speedVehicle - speedMax) / speedExceeded);
            conductorPoints = finePoints * calc
            if (conductorPoints > 12) {
                return `Carteira Caçada, ${conductorPoints} pontos`
            } else {
                return conductorPoints;
            }
        } else {
            return "Ok";
        }
    } 
}