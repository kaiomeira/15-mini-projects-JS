// Speed Max - 70 km/h (Velocidade Maxima)
// Every 5 km above the limit you get 1 point (a cada 5km acima do limite voce ganha 1 ponto)
// Case points greater than 12, driver's license suspended (caso pontos maior que 12 - carteira de motorista suspendida)

/**** Driver Data (Dados do Motorista) *****/
let driverPoints = 0;   // Driver points (Pontos do condutor)
let speedVehicle = 200; // Current Vehicle Speed (Velocidade atual do carro)

console.log(checkSpeed(speedVehicle));

// Declaring function checkSpeed
function checkSpeed(speed){
    /**** Traffic Rule (Regra de Trânsito) ****/
    const speedMax = 70;        // Maximum speed allowed (Velocidade Max. Permitida)
    const finePoints = 1;       // Ponto por a cada velocidade execedida km/h 
    const speedExceeded = 5;    // A cada qnt km/h aumenta os pontos

    /**** Validating Traffic Condition (Validando Regra de Trânsito) ****/
    if (speed < 0 || typeof speed !== 'number') {
        return 'Existe algo de errado';
    } else{
        if (speed > speedMax) {
            let calc = Math.floor((speedVehicle - speedMax) / speedExceeded);
            driverPoints = finePoints * calc;
            if (driverPoints > 12) {
                return `Carteira Caçada, ${driverPoints} pontos`;
            } else {
                return driverPoints;
            }
        } else {
            return "Ok";
        }
    } 
}