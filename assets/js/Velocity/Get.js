function Get() {
    const velocityElement = document.getElementById('velocity');
    const velocity = velocityElement.value;

    const accelerationElement = document.getElementById('acceleration');
    const acceleration = accelerationElement.value;

    return {
        velocity: parseFloat(velocity),
        acceleration: parseFloat(acceleration)
    }
}

function Set(d, v, a, at) {
    const decimalPlace = 10000;

    d = Math.floor(d);
    v = Math.floor(v * 100) / 100;
    a = Math.floor(a * decimalPlace) / decimalPlace;


    const displacementVElement = document.getElementById('displacementV');
    displacementVElement.innerText = "Displacement: " + d;

    const velocityVElement = document.getElementById('velocityV');
    velocityVElement.innerText = "Velocity: " + v;

    const accelerationVElement = document.getElementById('accelerationV');
    accelerationVElement.innerText = "Acceleration: " + a;
}