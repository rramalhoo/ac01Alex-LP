principal = parseFloat(prompt("Digite o valor principal:"));
taxa = parseFloat(prompt("Digite a taxa de juros (% ao ano):"));
tempo = parseFloat(prompt("Digite o tempo (anos):"));

juros = principal * taxa * tempo;

total = principal + juros;

alert(`O valor total a ser pago é: R$ ${total.toFixed(2)}`);