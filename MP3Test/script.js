document.getElementById('createMap').addEventListener('click', function() {
    document.getElementById('mapControls').style.display = 'block';
});

let startPointSet = false;
let endPointSet = false;
let startPoint = {}; // start point
let endPoint = {}; // end point

document.getElementById('startPoint').addEventListener('click', function() {
    startPointSet = true;
    startPoint = {lat: 0, lng: 0}; // coordinate simulation
    console.log('Start point set');
});

document.getElementById('endPoint').addEventListener('click', function() {
    if (startPointSet) {
        endPointSet = true;
        endPoint = {lat: 0, lng: 1}; 
        //pag calculate ng distance
        let distance = calculateDistance(startPoint, endPoint);
        document.getElementById('distanceResult').innerText = `Distance: ${distance} meters`;
        document.getElementById('labelInput').style.display = 'inline';
        document.getElementById('saveDistance').style.display = 'inline';
    } else {
        alert('Please set a start point first.');
    }
});

document.getElementById('saveDistance').addEventListener('click', function() {
    let label = document.getElementById('labelInput').value;
    if (label) {
        console.log(`Distance labeled: ${label}`); 
        alert(`Distance labeled: ${label}`);
    } else {
        alert('Please enter a label for the distance.');
    }
});


function calculateDistance(start, end) {
    // This function would use real coordinates and a map API in a full implementation
    return Math.sqrt(Math.pow(end.lat - start.lat, 2) + Math.pow(end.lng - start.lng, 2)) * 100000; // Mock calculation
}
