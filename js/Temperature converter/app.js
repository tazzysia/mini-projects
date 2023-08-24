function toCel(){
    let f = Number(document.querySelector("#userinput").value);

    let c = ( 5/9 )*(f - 32);

     document.querySelector("#result").innerHTML = c.toFixed(2)+"C";

     document.querySelector("#userinput").value = "";
}
function toFeh(){
    let c = Number (document.querySelector("#userinput").value);

    let f = ( 9/5 * c) + 32 ;

    document.querySelector("#result").innerHTML = f.toFixed(2)+"F";

    document.querySelector("#userinput").value = "";}