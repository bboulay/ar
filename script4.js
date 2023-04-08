window.onload = () => {
     const marker = this.el;
      const name = document.querySelector('.instructions');
      const description = document.querySelector('.description_txt');
      const map = document.querySelector('.map');
            
      const button_close_fact = document.getElementById('close_fact');
      const button_camera_map = document.getElementById('camera_map');
      const button_language = document.getElementById('language');      
      name.style.display = "none";
      description.style.display = "none";
      button_close_fact.style.display = "none"; 
      button_camera_map.innerText="C";
      button_camera_map.style.display = "block";
      button_language.innerText = "L";
      button_language.style.display = "block";
      var elem_img = document.createElement("img");
      elem_img.src = "./kiasma.png";
      map.appendChild(elem_img);
      map.style.display = "block";
            
      button_close_fact.addEventListener('click', function () {
            name.innerText = "";
            description.innerText = "";
            button_close_fact.innerText="";
            name.style.display = "none";
            button_close_fact.style.display = "none";
            description.style.display = "none";
        });
            
      button_camera_map.addEventListener('click', function (event) {
            // switch between map and camera
            event.preventDefault();
            // switch between map and camera
            
            current_select = button_camera_map.innerText;
            
            current_select = button_camera_map.innerText;
            if (current_select == "C") {
                 // enable camera
                 button_camera_map.innerText = "M";
                 map.style.display = "none";
            }
            else {
                 // disable camera
                 // enable map
                 map.style.display = "block";
                 button_camera_map.innerText = "C";
            }
        });
            
      button_language.addEventListener('click', function () {
            
        });
      
    
};


var objects = {};
objects['object5'] = {
        name: 'object5', 
        description: 'long description for the object 5, that can take several lines and even more long description for the object 5, that can take several lines and even more long description for the object 5, that can take several lines and even more long description for the object 5, that can take several lines and even more', 
        description_image: './5.png',
	found: false
};
objects['object6'] = {
        name: 'object6', 
        description: 'long description for the object 6, that can take several lines and even more', 
        description_image: './06-barcode.png',
	found: false
};
        
function deleteScene() {
    var scene = document.querySelector('a-scene');
    if (scene) {
        alert("remove scene " +scene.id);
        scene.parentNode.removeChild(scene);
        if (scene.renderer) {
            scene.renderer.dispose();
        }
    }
    
}

function addScene() {
    
}


function addMarkers() {
    var scene = document.querySelector('a-scene');
    for (let m in objects) {
        var marker_object = document.createElement('a-marker');
        marker_object.setAttribute('markerhandler','');
        marker_object.setAttribute('emitevents', true);
        marker_object.setAttribute('cursor', 'rayOrigin: mouse');
        marker_object.setAttribute('id', 'object' + objects[m].value);
        marker_object.setAttribute('type','barcode');
        marker_object.setAttribute('value', objects[m].value);
        
        var object_visual = document.createElement('a-box');
        object_visual.setAttribute('position', '0 0.5 0');
        object_visual.setAttribute('color', objects[m].color);
        
        marker_object.appendChild(object_visual);
        scene.appendChild(marker_object);
    }
}


AFRAME.registerComponent('markers_start',{
	init:function(){
	    addMarkers();

	}
});


AFRAME.registerComponent('markerhandler', {
    init: function () {
      
      const marker = this.el;
      const name = document.querySelector('.instructions');
      const description = document.querySelector('.description_txt');
            
      const button_close_fact = document.getElementById('close_fact');
      const button_camera_map = document.getElementById('camera_map');
      const button_language = document.getElementById('language');      
      name.style.display = "none";
      description.style.display = "none";
      button_close_fact.style.display = "none"; 
      button_camera_map.innerText="C";
      button_camera_map.style.display = "block";
      button_language.innerText = "L";
      button_language.style.display = "block";
            
               
      // test display
      //name.innerText = objects['object5'].name;
      //var elem_img = document.createElement("img");
      //elem_img.src = objects['object5'].description_image;
      //description.appendChild(elem_img);
      //var elem_txt = document.createTextNode(objects['object5'].description);
      //description.appendChild(elem_txt);
      
      marker.addEventListener('markerFound', () => {
        button_close_fact.innerText = 'X';
        description.innerText = "";     
        name.innerText = objects[marker.id].name;
	objects[marker.id].found = true;
        var elem_img = document.createElement("img");
        elem_img.src = objects[marker.id].description_image;
        description.appendChild(elem_img);
        var elem_txt = document.createTextNode(objects[marker.id].description);
        description.appendChild(elem_txt);
        name.style.display = "block";
        button_close_fact.style.display = "block";
        description.style.display = "block";

      });
      //marker.addEventListener('markerLost', () => {
      //  name.innerText = "";
      //  description.innerText = "";
      //})
    }
  });
