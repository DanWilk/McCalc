const calculateWaferMc = (event) => {
    console.log(event)
    event.preventDefault();
    const WaferGreen = document.getElementById("GreenWafer").value;
    const WaferDry = document.getElementById("DryWafer").value;
    const WaferMC = document.getElementById("MoistureContent");
    const MC = (((WaferGreen - WaferDry) / WaferDry) * 100).toFixed(2);

    WaferMC.value = MC;

}