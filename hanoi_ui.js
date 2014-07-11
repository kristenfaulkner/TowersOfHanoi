(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});


  var UI = Hanoi.UI = function (game) {
    this.$game = game;
  };

    UI.prototype.setupHandlers = function() {

        var that = this;
         $('.tower').on("click", function(event) { // from tower click
             $('.tower').off("click");
            var start_pos = eval(event.currentTarget.id);
             console.log("in from tower click")
             
             $('.tower').on("click", function(event) { //to tower click
                 $('.tower').off("click");
                 var end_pos = eval(event.currentTarget.id);
                
                if (that.$game.move(start_pos, end_pos)) {

                    that.render();
                    console.log(that.$game.towers);
                 } 
                 that.setupHandlers();
             });
         });
             
    };

    UI.prototype.render = function(){
        var ui = this;
        $( ".tower" ).each(function(index, el ) {
         $(el).find('.disk').each(function(index2, el2 ) {        
             if (ui.$game.towers[index][2-index2] === undefined) {
                 $(el2).html('');   
             } else {
                 $(el2).html(ui.$game.towers[index][2-index2]);
             }
         });
        });
  };

    
})(this);
