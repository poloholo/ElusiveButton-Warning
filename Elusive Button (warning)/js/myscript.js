/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
function runaway()
{   
    
    var newstyle = '<style> button{position:absolute;left:90px;top:200px;}</style>';
            
    document.getElementById("button_style").innerHTML= newstyle;
}
*/

/*
function runaway()
{   
    
    var newstyle =  '<style> button{'+
                    'position:absolute;'+
                    'left:90px;'+
                    'top:200px;'+
                    '} </style>';
            
    document.getElementById("button_style").innerHTML= newstyle;
}
*/


/*
function runaway()
{   
    
    var leftpos = 200;   
    var rightpos = 150;
    
    
    var newstyle = '<style> button{'+
                    'position:absolute;'+
                    'left:'+leftpos+'px;'+
                    'top:'+rightpos+'px;'+
                    '}</style>';
    document.getElementById("button_style").innerHTML= newstyle;
}
*/

var gotme=5;

function runaway()
{   
    var leftpos = Math.random() * 500 ;
    var rightpos =Math.random() * 500 ;
    var newstyle;
    leftpos = Math.floor(leftpos);
    rightpos = Math.floor(rightpos);
    
    if(gotme-- >0)
    {
            newstyle = '<style> button{'+
                    'position:absolute;'+
                    'left:'+leftpos+'px;'+
                    'top:'+rightpos+'px;'+
                    '}</style>';
            
        document.getElementById("button_style").innerHTML= newstyle;
    }
 
    if(gotme == 0)   {
     document.getElementById("btn_elusive").innerHTML= "You got me!";
     document.getElementById("jumpscare").innerHTML= "BOO!";

     var oof='<audio id="alia" controls autoplay >' +
     '<source src="alia.mp3" type="audio/mpeg"> </audio>';
     document.getElementById("oof").innerHTML= oof ;
    }

}