

import "../scss/style.scss";


    /*randomizer*/
    $(function () {
        var area = $(".puzzle__area");
        var regions = area.children();
        while (regions.length) {
            area.append(regions.splice(Math.floor(Math.random() * regions.length), 1)[0]);
        }

       

    });

   $('#bratislava, #trnava, #zilina, #presov, #kosice, #trencin, #banska, #nitra').draggable();


  var regionData = {'#bratislava':'#bratislava-drop' ,'#trnava' : '#trnava-drop',
'#trencin':'#trencin-drop',
'#nitra':'#nitra-drop',
'#zilina':'#zilina-drop',
'#presov':'#presov-drop',
'#kosice':'#kosice-drop',
'#banska':'#banska-drop'
}


  $.each(regionData, function(region, regionDrop){
   $(regionDrop).droppable({
        accept:region,
        drop: function(event, ui){
            $(region).fadeOut();
        }
   });

  });





