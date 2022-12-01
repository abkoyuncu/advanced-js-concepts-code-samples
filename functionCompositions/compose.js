//Compose sample
//We have a system that takes the first year of work and returns the total compensation based on total years after deducting the tax
//Our compose from right to left should call the following:
//1)Get total Year worked
//2)Calulate gross fee of recompensation
//3)Deduct the tax
const pipeFunction = (f,g) => (...args) => g(f(...args));

const calculator = (...fns) => fns.reduce(pipeFunction);
const yearlyCompensationFee = 100;
const baseTax = 0.18;

const calculateTotalYearOfWork = (startYear) => new Date().getFullYear() - startYear;
const calculateFee = (totalYear) => totalYear * yearlyCompensationFee;
const deductTax = (grossFee) => grossFee - (grossFee * baseTax) 
const calculateCompensation = calculator(
    calculateTotalYearOfWork,
    calculateFee,
    deductTax
)

const myCompensation = calculateCompensation(2016)

