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
      //div.innerText = objects['object5'].name;
      //var elem_img = document.createElement("img");
      //elem_img.src = objects['object5'].description_image;
      //description.appendChild(elem_img);
      //var elem_txt = document.createTextNode(objects['object5'].description);
      //description.appendChild(elem_txt);
      
      marker.addEventListener('markerFound', () => {
        div.innerText = objects[marker.id].name;
        var elem_img = document.createElement("img");
        elem_img.src = objects[marker.id].description_image;
        description.appendChild(elem_img);
        var elem_txt = document.createTextNode(objects[marker.id].description);
        description.appendChild(elem_txt);

      }),
      marker.addEventListener('markerLost', () => {
        div.innerText = "";
        description.innerText = "";
        description_image.innerText = "";
      })
    }
  });
