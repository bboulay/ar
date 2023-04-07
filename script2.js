window.onload = () => {
    
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'office',
            location: {
                lat: 60.15096294660794,
                lng: 24.63873891829573,
            },
        },
       {
            name: 'bedroom',
            location: {
                lat: 60.15098426455627,
                lng: 24.63869197963797,
            },
        },
        {
            name: 'balcony',
            location: {
                lat: 60.15090024422584,
                lng: 24.638603466740477,
            },
        },
    ];
}



function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        
        const placeText = document.createElement('a-link');
                    placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                    placeText.setAttribute('title', place.name);
                    placeText.setAttribute('scale', '1 1 1');
        
        placeText.addEventListener('loaded', () => {
                        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                    });
        
        scene.appendChild(placeText);
    });
}
