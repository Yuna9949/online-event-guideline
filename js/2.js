function calcNow(){
    calc.totalP.value = calcP(calc.mainP.value, calc.subP.value, calc.PpP.value);
}
function calcP(mainP, subP, PpP){
    return Math.round(mainP*(PpP/2)+subP*PpP);
}