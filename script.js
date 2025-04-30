let data = new Date();
document.getElementById("data-atual").innerHTML = data.toLocaleDateString();

function getDiaDaSemana(data) {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return diasDaSemana[data.getDay()];
}

const dataAtual = new Date();
const diaDaSemana = getDiaDaSemana(dataAtual);

document.getElementById("diaSemana").textContent = diaDaSemana;