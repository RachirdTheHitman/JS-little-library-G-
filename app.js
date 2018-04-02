var g = G$('Richard', 'Zhang');
g.greet().setLang('es').greet(true).log();

$('#login').click(function() {
    
    var loginGrtr = G$('Yi', 'Zhang');
    
    $('#logindiv').hide();
    
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});