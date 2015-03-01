
function  textCodeWeek(){      
        $("#CodeWeekPanel").slideToggle("slow");        
        if ($( window ).width() < 600){
            $("#mas").slideDown("fast");
            $("#ADIE").slideUp("fast");
            $("#Programamos").slideUp("fast");
            $("#UNIR").slideUp("fast");
            $("#Dojo").slideUp("fast");
            $("#Dojo").slideUp("fast");
        }
        if (close1)  
            $("#arriba3").empty().html( '<span  class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>'); 
        else
            $("#arriba3").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
        $("#arriba4").empty().html('<span  class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
        close1=!close1;
        panelnumber1=0;
}
function  textADIE(){      
       
}
function  textProgramamos(){      
       
}
function  textUNIR(){      
       
}
function  textDojo(){      

}
function  textINTEF(){      
   
}

var panelnumber=0;
var panelnumber1=0;
var close=true;
var close1=true;
var avisovisible=true;
function textdrscratch(){
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
    return false;
}
function textFECyT(){
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
    return false;
}
$(document).ready(function(){
    /*software*/      
    $("#drscratch").click(function(){textdrscratch()});
    $("#drscratchPanel1").click(function(){textdrscratch()});
    $("#drscratchPanel2").click(function(){textdrscratch()});    
    $("#gymkhana").click(function textgymkhana(){
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
    $("#e-Madrid").click(function  texteMadrid(){
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
    $("#FECyT").click(function(){textFECyT()});
    $("#FECyTPanel1").click(function(){textFECyT()});
    $("#FECyTPanel2").click(function(){textFECyT()});
    $("#FECyTPanel3").click(function(){textFECyT()});
    $("#FECyTPanel4").click(function(){textFECyT()});    
});