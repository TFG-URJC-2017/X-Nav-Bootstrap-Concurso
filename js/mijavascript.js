function  textCodeWeek(){      
        $('#visor').css('background-color','#d0e2ec');
        $('#textoCambiante').css('text-align','left');
        $('#textoCambiante').empty().html('<p>Semana Europea de la programación (<a href="http://codeweek.eu/" title="pagina web codeweek"> [web]</a> ):</p><p>varios miembros del equipo son los embajadores españoles de esta iniciativa promovida por la Comisión Europea</p><p>encargándose, entre otras cuestiones, de la gestión y promoción de los diferentes acontecimientos y eventos que se van a celebrar en nuestro país.');
}
function  textADIE(){      
        $('#visor').css('background-color','#fed88f');
        $('#textoCambiante').css('text-align','left');
        $('#textoCambiante').empty().html('<p>ADIE (<a href="http://www.adie.es">[web]</a>):</p><p>El equipo del proyecto forma parte de la Asociación para el Desarrollo de la Informática Educativa,</p> <p>cuyos objetivos son:<br> 1. fomentar la Informática Educativa, <br>2. promover la formación de las personas en las Nuevas Tecnologías Educativas,<br> 3. el intercambio de trabajos, ideas y experiencias y <br>4. evaluar la calidad pedagógica de los productos existentes.</p>');
}
function  textProgramamos(){      
        $('#visor').css('background-color','#a6daef');
        $('#textoCambiante').css('text-align','left');
        $('#textoCambiante').empty().html('<p>Programamos.es (<a href="http://www.programamos.es">[web]</a>):</p><p> Varios miembros del equipo son los promotores y directores de esta asociación, que pretende crear una comunidad de docentes interesados en aprender y enseñar a programar de manera divertida. Constituida en 2013, cuenta a día de hoy con una comunidad reducida, pero muy activa, de profesores que realizan actividades y talleres para dar difusión de este movimiento e involucrar en el mismo a estudiantes, docentes, familias y administraciones educativas.</p>');
}
function  textUNIR(){      
        $('#visor').css('background-color','#eee');
        $('#textoCambiante').css('text-align','left');
        $('#textoCambiante').empty().html('<p>UNIR (<a href="http://www.unir.net">[web]</a> ):</p><p> Varios miembros del equipo colaboran con la Universidad Internacional de la Rioja, una universidad virtual que oferta el Máster en e-learning y redes sociales, orientado a docentes principalmente de las etapas infantil, primaria y secundaria. Asimismo, han ofrecido varios talleres abiertos al público sobre programación en Scratch.</p>');
}
function  textDojo(){      
        $('#visor').css('background-color','#f4858e');
        $('#textoCambiante').css('text-align','left');
        $('#textoCambiante').empty().html('<p>Coder-Dojo Medialab Prado (<a href="http://medialab-prado.es/article/coderdojo">[web]</a>):</p><p> es una iniciativa internacional surgida en 2011 en Irlanda con el objetivo de enseñar a niños y jóvenes a programar. En pocos meses se ha extendido y ahora mismo coderDojo es una red de centros. En la actualidad existen decenas de clubs en más de de 20 países. En CoderDojo se potencia el software libre y se trabaja con herramientas de programación libres. Algunas de las cosas que se suelen aprender son: Scratch, HTML, Javascript, Arduino, Processing, Android.</p>');
}
function  textINTEF(){      
        $('#visor').css('background-color','#bfe2ca');
        $('#textoCambiante').css('text-align','left');
        $('#textoCambiante').empty().html('<p>INTEF (<a href="http://www.ite.educacion.es/">[web]</a>):</p><p>El equipo del proyecto cuenta con vínculos muy estrechos con el Instituto Nacional de Tecnologías Educativas y de Formación del Profesorado, dependiente del Ministerio de Educación, Cultura y Deporte. Así, uno de los miembros del equipo trabaja allí, mientras que cuatro de los miembros del mismo son profesores o tutores en cursos de formación en pensamiento computacional para profesores, incluyendo cursos de verano o cursos de formación on-line.</p>');
}
function marcarSoftware(){
    $("#idSoftware").addClass("idSoftware");
}

var panelnumber=0;
var panelnumber1=0;
var close=true;
var close1=true;
$(document).ready(function(){
    /*software*/     
    $("#drscratch").click(function(){
        $("#gymkhanaPanel").slideUp("fast");
        if ($( window ).width() < 600)
            $("#gymkhana").slideUp("fast");  
        if (panelnumber===0){
            $("#arriba2").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
            $("#arriba1").empty().html( '<span  class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>');
            $("#drscratchPanel1").slideDown("slow");
            $("#drscratchPanel2").slideUp("fast");
            $("#mensaje").slideUp("fast");
             panelnumber=1;
        }else if(panelnumber===1){
            $("#drscratchPanel2").slideDown("slow");
            $("#drscratchPanel1").slideUp("fast");
            panelnumber=2;
        }else if(panelnumber===2){
            $("#arriba1").empty().html( '<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');          
            $("#drscratchPanel2").slideUp("slow");
            $("#gymkhana").slideDown("fast");
            $("#mensaje").slideDown("fast");
            panelnumber=0;
        }
    });
    $("#drscratchPanel1").click(function(){
        $("#drscratchPanel2").slideDown("slow");
        $("#drscratchPanel1").slideUp("slow");
          panelnumber=2;
    });
    $("#drscratchPanel2").click(function(){
        $("#drscratchPanel2").slideUp("slow");
        $("#gymkhana").slideDown("fast");
        $("#mensaje").slideDown("slow");
        $("#arriba1").empty().html( '<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
         panelnumber=0;
    });
    $("#gymkhana").click(function(){
        $("#gymkhanaPanel").slideToggle("slow");
        if (panelnumber===0)
            $("#mensaje").slideToggle("fast");
        else{
            panelnumber=0;
        }
        $("#drscratchPanel1").slideUp("fast");
        $("#drscratchPanel2").slideUp("fast");
        
        if (close)  
            $("#arriba2").empty().html( '<span  class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>'); 
        else
            $("#arriba2").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
        $("#arriba1").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
        close=!close;
    });
     $("#gymkhanaPanel").click(function(){
         $("#gymkhanaPanel").slideUp("slow");
         $("#mensaje").slideToggle("fast");
         $("#arriba2").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
         close=true;
     });
    /*proyectos*/    
    $("#e-Madrid").click(function(){
        $("#e-MadridPanel").slideToggle("slow");
        if (panelnumber1===0)
            $("#mensaje1").slideToggle("fast");
        else{
            panelnumber1=0;
        }
        if ($( window ).width() < 600)
            $("#FECyT").slideToggle("fast");
        $("#FECyTPanel1").slideUp("fast");
        $("#FECyTPanel2").slideUp("fast");
        $("#FECyTPanel3").slideUp("fast");
        if (close1)  
            $("#arriba3").empty().html( '<span  class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>'); 
        else
            $("#arriba3").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
        $("#arriba4").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
        close1=!close1;
        panelnumber1=0;
    });
     $("#e-MadridPanel").click(function(){
         $("#e-MadridPanel").slideUp("slow");
         $("#FECyT").slideDown("fast");
         $("#mensaje1").slideToggle("fast");
         $("#arriba3").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
         close1=true;
     });
     $("#FECyT").click(function(){
        $("#e-MadridPanel").slideUp("fast");
        if (panelnumber1===0){
            $("#arriba3").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
            $("#arriba4").empty().html( '<span  class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>');
            $("#FECyTPanel1").slideDown("slow");
            $("#FECyTPanel2").slideUp("fast");
            $("#FECyTPanel3").slideUp("fast");
            $("#mensaje1").slideUp("fast");
            panelnumber1=1;
        }else if(panelnumber1===1){
            $("#FECyTPanel2").slideDown("slow");
            $("#FECyTPanel1").slideUp("fast");
            panelnumber1=2;
        }else if(panelnumber1===2){
            $("#FECyTPanel3").slideDown("slow");
            $("#FECyTPanel2").slideUp("fast");
            panelnumber1=3;     
        }else if(panelnumber1===3){
            $("#FECyTPanel4").slideDown("slow");
            $("#FECyTPanel3").slideUp("fast");
            panelnumber1=4;         
        }else if(panelnumber1===4){
            $("#arriba4").empty().html( '<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');          
            $("#FECyTPanel4").slideUp("slow");
            $("#mensaje1").slideDown("fast");
            panelnumber1=0;
        }
    });
    $("#FECyTPanel1").click(function(){
        $("#FECyTPanel2").slideDown("slow");
        $("#FECyTPanel1").slideUp("fast");
        panelnumber1=2;
    });
    $("#FECyTPanel2").click(function(){
        $("#FECyTPanel3").slideDown("slow");
        $("#FECyTPanel2").slideUp("fast");
        panelnumber1=3;    
    });
    $("#FECyTPanel3").click(function(){
        $("#FECyTPanel4").slideDown("slow");
        $("#FECyTPanel3").slideUp("fast");
        panelnumber1=4;    
    });
    $("#FECyTPanel4").click(function(){
        $("#arriba4").empty().html( '<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');          
        $("#FECyTPanel4").slideUp("slow");
        $("#mensaje1").slideDown("fast");
        panelnumber1=0;
    });
     
     
     
});