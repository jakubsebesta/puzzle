

import "../scss/style.scss";













    /*randomizer*/
    $(function () {
        var area = $(".puzzle__area");
        var regions = area.children();
        while (regions.length) {
            area.append(regions.splice(Math.floor(Math.random() * regions.length), 1)[0]);
        }

       

    });

   $('#bratislava, #trnava, #zilina, #presov, #kosice, #trencin, #banska_bystrica, #nitra').draggable();










