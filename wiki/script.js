
$(document).ready(function(){
    $('#webClick').click(function() {
        $('#mWeb').slideToggle('slow')
        .addClass("show");
        return false;
    });

    $('#panelsClick').click(function() {
        $('#mPanels').slideToggle('slow')
        .addClass("show");
        return false;
    });
    
    $('#klutterClick').click(function() {
        $('#mKlutter').slideToggle('slow')
        .addClass("show");
        return false;
    });
    
    $('#paperbackClick').click(function() {
        $('#mPaperback').slideToggle('slow')
        .addClass("show");
        return false;
    });
    
    $('#tachiyomiClick').click(function() {
        $('#mTachiyomi').slideToggle('slow')
        .addClass("show");
        return false;
    });
    
    $('#webAClick').click(function() {
        $('#aWeb').slideToggle('slow')
        .addClass("show");
        return false;
    });
    
    $('#infuseAClick').click(function() {
        $('#aInfuse').slideToggle('slow')
        .addClass("show");
        return false;
    });
});