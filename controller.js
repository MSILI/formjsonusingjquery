$( "form" ).submit(function( event ) {
    var oElements = {};
    $('form [name]').each(function(){
        oElements[this.name] = this.value;
    });
    console.log(oElements);
    event.preventDefault();
});