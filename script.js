function ex01() {
    base = parseFloat(prompt('Digite a base:'))
    altura = parseFloat(prompt('Digite a altura:'))

    area = base * altura

    alert(`A area do retangulo é: ${area}`)
}

function ex02() {
    celsius = parseFloat(prompt('Digite a temperatura em C:'));

    F = (celsius * 9 / 5) + 32;

    alert(`A temperatura em fahrenheit é: ${F} °F`)
}

function ex03() {
    principal = parseFloat(prompt('Digite o valor principal:'));
    taxa = parseFloat(prompt('Digite a taxa de juros:'));
    tempo = parseFloat(prompt('Digite o tempo em anos:'));

    juros = principal * taxa * tempo;

    total = principal + juros;

    alert(`O valor total a ser pago é: R$ ${total / 10}`);
}
