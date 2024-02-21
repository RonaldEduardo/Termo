import { palavras } from './palavras.js';


function termoGame() {

  let soma = Math.random() * (palavras.length - 1) + 1;

  let termo = palavras[parseInt(soma)];

  termo = termo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  console.log(termo)

  return termo;
}

const termoS = termoGame();

document.addEventListener('DOMContentLoaded', (event) => {

  const inputs = document.querySelectorAll('#formLetras .campoLetra');

  inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      // Mover para o próximo campo se o atual foi preenchido
      if (input.value.length === parseInt(input.maxLength)) {
        if (index + 1 < inputs.length) {
          inputs[index + 1].focus();
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      // Mover para o campo anterior se pressionar Backspace e o campo estiver vazio
      if (e.key === "Backspace" && input.value === '') {
        if (index - 1 >= 0) {
          inputs[index - 1].focus();
        }
      }
    });
  });
});

function verificarPalavra() {
  const campos = document.querySelectorAll('.campoLetra');

  // Verifica se todos os campos estão preenchidos
  const todosPreenchidos = Array.from(campos).every(campo => campo.value.trim() !== '');

  if (!todosPreenchidos) {
    console.log('Favor preencher todos os campos.');
    return;
  }

  const palavra = Array.from(campos).map(campo => campo.value).join('');
  const termoA = termoS.split('');

  // Define as cores baseado na comparação
  campos.forEach((campo, index) => {
    if (palavra[index] === termoS[index]) {
      campo.style.backgroundColor = "green";
    } else if (termoA.includes(palavra[index])) {
      campo.style.backgroundColor = "yellow";
    } else {
      campo.style.backgroundColor = "red";
    }
    campo.style.color = "white";
  });

  if (palavra !== termoS) {
    criarNovosInputs(); // Função para criar novos inputs não está definida no snippet original
    campos.forEach(campo => campo.value = ''); // Limpa os campos para nova tentativa
  }

  // Volta o foco para o primeiro campo
  if (campos.length > 0) {
    campos[0].focus();
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    verificarPalavra();
  }
});

function criarNovosInputs() {
  const camposOriginais = document.querySelectorAll('.campoLetra');
  let containerNovosInputs = document.getElementById('novosInputs');

  if (!containerNovosInputs) {
    containerNovosInputs = document.createElement('div');
    containerNovosInputs.id = 'novosInputs';
    document.body.appendChild(containerNovosInputs);
  }

  const numeroDivs = containerNovosInputs.querySelectorAll('.novoInput').length

  console.log(numeroDivs)

  if (numeroDivs >= 6) {
    document.getElementById("meuAlerta").style.display = "block";

    let btnFechar = document.querySelector('.fecharbtn');

    function fecharElemento(event) {
      event.target.parentElement.style.display = 'none';
    }

    function reload() {
      window.location.reload();
    }

    btnFechar.addEventListener('click', function (event) {
      reload();
      fecharElemento(event);
    });

  } else {
    const novaDiv = document.createElement('div');
    novaDiv.className = 'novoInput';
    novaDiv.id = 'novosInputs' + (numeroDivs + 1);
    containerNovosInputs.appendChild(novaDiv);


    camposOriginais.forEach((campo) => {
      const novoInput = document.createElement('input');
      novoInput.type = 'text';
      novoInput.readOnly = true;
      novoInput.style.backgroundColor = campo.style.backgroundColor;
      novoInput.style.color = campo.style.color
      novoInput.value = campo.value;
      novoInput.classList.add('campoLetraNew');

      novaDiv.appendChild(novoInput);

      campo.value = '';
      campo.style.backgroundColor = 'white'; // Define a cor de fundo para branco
      campo.style.color = 'black'; // Define a cor do texto para preto
    })
  }

  if (camposOriginais.length > 0) {
    camposOriginais[0].focus();
  }
}
