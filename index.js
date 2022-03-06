'strict mode';

const tipCalculator = () => {
    const price = document.getElementById('inputPrice').value;
    const tip = document.getElementById('inputTip').value;
    
    return document.getElementById('output').innerHTML = price*tip;
}

document.getElementById('btn').addEventListener('click',tipCalculator);

