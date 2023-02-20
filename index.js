let operator="";
function typenumber(ctrl){
    let textbox=document.getElementById("textbox");
    let value=textbox.value;
    if(ctrl.innerText == "."){
        if(value.indexOf(".") != -1)
        return;
    }
    let number= value + ctrl.innerText; 
    textbox.value=number;
}
function clearall(){
    let textbox=document.getElementById("textbox");
    textbox.value= "";
    textboxhistory.value="";
    operator="";
}
function clearone(){
    let textbox=document.getElementById("textbox");
    let text=textbox.value;
    let length=text.length;
    if(length > 0){
        let newtext=text.slice(0,length -1);
        textbox.value=newtext;
    }
}
function operation(ctrl){
    let textbox=document.getElementById("textbox"); 
    let textboxhistory=document.getElementById("textboxhistory");
    textboxhistory.value=textbox.value;
    textbox.value="";


    operator=ctrl.innerText;
}
function calcu(){
    let textbox=document.getElementById("textbox"); 
    let textboxhistory=document.getElementById("textboxhistory");
     
    let no1= Number(textboxhistory.value);
    let no2= Number(textbox.value);

    let answer=0;
    let display="";

    display=textboxhistory.value.concat(operator, textbox.value);
    if(operator == "+"){
       answer=no1 + no2;
    }

   else if(operator == "-"){
        answer=no1-no2;
     }

     if(operator == "X"){
        answer=no1 * no2;
     }

     if(operator == "/"){
        answer=no1 / no2;
     }

     textbox.value= answer;
     textboxhistory.value=display;
}