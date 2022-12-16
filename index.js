// IN PROGRESS

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

const feetToMeter = 0.305;
const gallonToLiter = 3.785;
const poundToKilo = 0.454;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  lengthEl.textContent = `${baseValue} meters = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`;

  volumeEl.textContent = `${baseValue} liters = ${(
    baseValue * literToGallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue * gallonToLiter
  ).toFixed(3)} liters`;

  massEl.textContent = `${baseValue} kilos = ${(
    baseValue * kiloToPound
  ).toFixed(3)} pounds | ${baseValue} pounds = ${(
    baseValue * poundToKilo
  ).toFixed(3)} kilos`;
});
