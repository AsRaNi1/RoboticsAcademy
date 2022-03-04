'use strict';
var circuit;
// Get the select element
const circuit_selector = document.querySelector('#circuit_selector');
circuit_selector.addEventListener('change', function(){
    // Get the value selected
    circuit = circuit_selector.options[circuit_selector.selectedIndex].value;
    console.log('Changed: ', circuit);
    // Classes
    let classes = ['default', 'prius'];



    // Set variable to toggle gazebo
    gazeboToggle = true;
    // Stop the simulation
    stop();
    stopBrain();
    alert('Loading circuit. Please wait until the connection is restored.');
    connectionUpdate({connection: 'exercise', command: 'down'}, '*');
});
function startNewCircuit() {
    // Kill actual sim
    startSim(2)
    // StartSim
    swapping = true;
    startSim(1, circuit );
    connectionUpdate({connection: 'exercise', command: 'swap'}, '*');
    toggleSubmitButton(false);
    firstCodeSent = false;
}
