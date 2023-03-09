function calcular(event) {
event.preventDefault();

    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numPeople = document.getElementById('people').value;

    if (bill == '' | serviceQuality == 0) {
        alert("Por favor, Preencha os campos faltantes!")
        return;
    }

    if(numPeople == '' | numPeople <=1) {
        numPeople= 1;

        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';

    }

    let total = (bill * serviceQuality) / numPeople;
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;

    document.getElementById('totalTip').style.display = 'block';
}

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsForm').addEventListener('submit', calcular);