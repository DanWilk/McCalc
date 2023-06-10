const calculateWaferMc = (event) => {
    // event.preventDefault();
    const WaferGreen = document.getElementById("GreenWafer").value;
    const WaferDry = document.getElementById("DryWafer").value;
    const WaferMC = document.getElementById("MoistureContent");
    const MC = (((WaferGreen - WaferDry) / WaferDry) * 100).toFixed(2);

    WaferMC.value = MC;
    return MC / 100;

}

const calculateoODWeight = (event) => {
    event.preventDefault();
    const BoardGreen = document.getElementById("GreenBoard").value;
    const BoardOvenDry = document.getElementById("COvenDryBoard");
    const BoardMC = document.getElementById("BoardMC");

    const WaferMC = calculateWaferMc();
    console.log(WaferMC + 1);
    const CalcOvenDry = (BoardGreen / (WaferMC + 1)).toFixed(2);
    console.log(CalcOvenDry);
    const CalcBoardMC = (((BoardGreen - CalcOvenDry) / CalcOvenDry) * 100).toFixed(2);
    console.log(CalcBoardMC)

    BoardOvenDry.value = CalcOvenDry;
    BoardMC.value = CalcBoardMC

}