window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

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


var models = [
    {
        info: 'Magnemite, Lv. 5, HP 10/10',
    },
    {
        info: 'Articuno, Lv. 80, HP 100/100',
    },
    {
        info: 'Dragonite, Lv. 99, HP 150/150',
    },
];

var modelIndex = 0;
var setModel = function (model, entity) {
    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

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

        setModel(models[modelIndex], model);

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}
