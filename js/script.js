$(document).ready(function() {
    $('#menu').click(function(){
        $('ul').toggleClass('view');
    });
    $('#home').click(function(){
        $('ul').removeClass('view');
    });

    $("#home").mouseenter(function(){  
        console.log('hello');
        $('#home img').attr('src','pictures/arrow-white.svg');  
        
    });
       $("#home").mouseleave(function(){       
            $('#home img').attr('src','pictures/arrow-grey.svg');      
        }); 
    
       $("#menu").mouseenter(function(){  
        console.log('hello');
        $('#menu img').attr('src','pictures/line-white.svg');  
        
    });
       $("#menu").mouseleave(function(){       
            $('#menu img').attr('src','pictures/line-grey.svg');      
        }); 
});