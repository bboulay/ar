var objects = {};
objects['object5'] = {
        name: 'object5', 
        description: 'long description for the object 5, that can take several lines and even more', 
        description_image: './5.png'
};
objects['object6'] = {
        name: 'object6', 
        description: 'long description for the object 6, that can take several lines and even more', 
        description_image: './06-barcode.png'
};
        


AFRAME.registerComponent('markerhandler', {
    init: function () {
      
      const marker = this.el;
      const div = document.querySelector('.instructions');
      const description = document.querySelector('.description_txt');
      const description_image = document.querySelector('.description_image');
      
      // test display
      div.innerText = objects['object5'].name;
      description.innerText = '<img src=' +  objects['object5'].description_image + '>' + objects['object5'].description;
      
      marker.addEventListener('markerFound', () => {
        var elem = document.createElement("img");
        elem.src = objects[marker.id].description_image;
        description.appendChild(elem)
        div.innerText = objects[marker.id].name;
        description.innerText = '<img src=' +  objects[marker.id].description_image + '>' + objects[marker.id].description;

      }),
      marker.addEventListener('markerLost', () => {
        div.innerText = "";
        description.innerText = "";
        description_image.innerText = "";
      })
    }
  });
