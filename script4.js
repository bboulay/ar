// var objects = {};
// objects['object5'] = {name: 'object5', 
//                 description: 'babllasdlhfhl has sahdfljdh al aldsflkhasdf  öskjdafö ndsöjf öd önsdaö föj aösdfjö as', 
//                 description_image: 'image/object5.png'};
// objects['object6'] = {name: 'object6', 
//                 description: 'mbvnfbmn nw v mdfg ndfl lmnfdfdsg dfsg gh kklasd ll lasas dsafj asfj jfaja joffofoff asdf', 
//                 description_image: 'image/object6.png'};
        


AFRAME.registerComponent('markerhandler', {
    init: function () {
      
      const marker = this.el;
      const div = document.querySelector('.instructions');
      const description = document.querySelector('description');
      const description_image = document.querySelector('description_image');
      
      marker.addEventListener('markerFound', () => {
        div.innerText = marker.id;
        description.innerText = marker.id;
        //description.innerText = objects[marker.id].description;
        //description_image.innerText = objects[marker.id].description_image;
      }),
      marker.addEventListener('markerLost', () => {
        div.innerText = "";
        description.innerText = "";
        description_image.innerText = "";
      })
    }
  });
