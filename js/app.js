

import "../scss/style.scss";


    /*randomizer*/
    $(function () {
        var area = $(".puzzle__area");
        var regions = area.children();
        while (regions.length) {
            area.append(regions.splice(Math.floor(Math.random() * regions.length), 1)[0]);
        }

       

    });

   $('#bratislava, #trnava, #zilina, #presov, #kosice, #trencin, #banska, #nitra').draggable({ revert: "invalid" });


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
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
          },
        drop: function(event, ui){
            $( this )
            .addClass( "ui-state-highlight" );
            
        }
   });

  });





