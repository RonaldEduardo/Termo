//#region termo
const palavras = ["sagaz", "âmago", "negro", "termo", "êxito", "mexer", "nobre", "senso", "afeto", "algoz", "ética", "plena", "fazer", "tênue", "mútua", "assim", "vigor", "sutil", "aquém", "porém", "seção", "fosse", "sanar", "poder",
  "audaz", "ideia", "cerne", "sobre", "inato", "moral", "desde", "muito", "justo", "quiçá", "honra", "torpe", "sonho", "razão", "fútil", "etnia", "ícone", "amigo", "anexo", "égide", "tange", "lapso", "haver", "expor", "dengo", "mútuo", "tempo", "então", "casal", "seara", "hábil", "boçal", "ávido", "ardil", "saber", "pesar", "causa", "graça", "dizer", "genro", "óbice", "dever", "posse", "pária", "coser", "brado", "tenaz", "sendo", "prole", "crivo", "comum", "corja", "temor", "ainda", "detém", "ápice", "estar", "ânimo", "xibiu", "ceder", "ânsia", "pauta", "assaz", "digno", "culto", "fugaz", "atroz", "mundo", "censo", "gleba", "forte", "vício", "vulgo", "cozer", "valha", "denso", "neném", "revés", "criar", "pudor", "saúde", "dogma", "mesmo", "regra", "jeito", "louco", "atrás", "ordem", "todos", "mercê", "round", "clava", "impor", "banal", "pedir", "homem", "feliz", "coisa", "limbo", "apraz", "usura", "juízo", "sábio", "tenro", "servo", "desse", "pífio", "forma", "prosa", "presa", "falar", "ontem", "viril", "cunho", "posso",
  "devir", "certo", "manso", "reaça", "vendo", "meiga", "herói", "valor", "ébrio", "mágoa", "fluir", "acaso", "sério", "visar", "afago", "puder", "guisa", "falso", "platô", "fácil", "legal", "lugar", "temer", "ímpio", "abrir", "garbo", "afins", "linda", "cisma", "obter", "gerar", "óbvio", "pleno", "bruma", "ajuda", "praxe", "matiz", "burro", "êxodo", "crise", "união", "fluxo", "vênia", "senil", "havia", "tédio", "enfim", "ritmo", "tomar", "visão", "morte", "olhar", "brega", "levar", "álibi", "parvo", "casta", "gênio", "prumo", "favor", "bravo", "vital", "pulha", "reles", "reter", "valia", "vivaz", "parco", "falta", "grato", "cabal", "tecer", "laico", "ameno", "ouvir", "possa", "sábia", "calma", "noção", "carma", "viver", "outro", "ranço", "nicho", "força", "passo", "achar", "tendo", "prime", "noite", "óbito", "único", "pobre", "façam", "fator", "rogar", "selar", "terra", "fardo", "farsa", "ativo", "coeso", "anelo", "rever", "épico", "citar", "dúbio", "cisão", "sinto", "sonso", "leigo", "adiar", "ciúme", "sesta", "haste",
  "gente", "claro", "humor", "tende", "cesta", "deter", "revel", "velho", "sulco", "atuar", "exato", "papel", "amplo", "vemos", "árduo", "ideal", "labor", "feixe", "líder", "marco", "igual", "ponto", "lavra", "fonte", "débil", "terno", "imune", "gesto", "ficar", "ótica", "hiato", "cauda", "ambos", "vazio", "senão", "remir", "capaz", "nossa", "varão", "vácuo", "toada", "sonsa", "jovem", "tanto", "inata", "tenra", "coçar", "apoio", "velar", "algum", "xeque", "relva", "caçar", "série", "horda", "fusão", "raiva", "leito", "pouco", "farão", "advém", "vimos", "probo", "doido", "ciclo", "entre", "chuva", "sente", "coesa", "feito", "minha", "frase", "torço", "anuir", "verso", "botar", "rigor", "cruel", "brisa", "blasé", "ímpar", "massa", "trama", "chata", "dorso", "carro", "prece", "signo", "maior", "lazer", "moção", "credo", "covil", "preso", "pegar", "fauna", "seita", "sorte", "casto", "furor", "morar", "peste", "ambas", "flora", "dócil", "faina", "adeus", "livro", "vetor", "houve", "árido", "senda", "setor", "vírus", "comer",
  "liame", "plano", "pecha", "nunca", "meses", "manha", "ocaso", "aliás", "ardor", "peixe", "saiba", "visse", "beata", "aceso", "salvo", "vulto", "vasto", "antro", "breve", "banzo", "séria", "praia", "rezar", "morro", "mudar", "pajem", "saída", "birra", "junto", "reger", "prado", "ótimo", "parte", "avaro", "sinal", "agora", "segue", "campo", "áureo", "risco", "motim", "serão", "grupo", "lenda", "chulo", "anais", "andar", "acima", "átomo", "opção", "fugir", "antes", "brava", "treta", "nação", "leite", "rapaz", "parar", "fruir", "vilão", "ídolo", "fitar", "jazia", "prazo", "conta", "tenso", "puxar", "gerir", "texto", "áurea", "alude", "reino", "tirar", "verbo", "norma", "estão", "tosco", "exame", "índio", "época", "oxalá", "bando", "malta", "anciã", "psico", "traga", "prova", "arcar", "festa", "preto", "filho", "sinhá", "corpo", "aonde", "avião", "átrio", "praga", "cheio", "fatal", "turba", "voraz", "venal", "quase", "acesa", "certa", "quota", "logro", "sarça", "cópia", "fatos", "apego", "manhã", "fixar", "ligar", "oásis",
  "soldo", "sumir", "pompa", "coito", "nível", "magia", "dessa", "nódoa", "afora", "caixa", "messe", "alado", "perda", "nosso", "mente", "tocar", "tinha", "parca", "verve", "fraco", "livre", "solto", "lindo", "apelo", "lidar", "virão", "longe", "jirau", "glosa", "grave", "firme", "turva", "vezes", "opaco", "bônus", "exijo", "bater", "sexta", "sabia", "faixa", "trupe", "doído", "pardo", "astro", "salve", "fenda", "parva", "elite", "grata", "porta", "navio", "alçar", "supra", "autor", "viria", "irmão", "atual", "cânon", "ficha", "pique", "deixa", "cioso", "besta", "junco", "ético", "macio", "reses", "bicho", "douto", "abriu", "pagão", "curso", "abuso", "cousa", "retém", "calda", "posto", "judeu", "verba", "bioma", "locus", "privê", "caber", "desta", "supor", "rádio", "molho", "vídeo", "extra", "drops", "torso", "culpa", "menos", "zelar", "light", "calão", "vosso", "júlia", "combo", "chato", "vinha", "baixo", "gosto", "ígneo", "asilo", "super", "órfão", "advir", "suave", "agudo", "aluno", "turvo", "ruína", "facho", "pisar",
  "turma", "sítio", "estio", "traço", "ereto", "pódio", "rouca", "ações", "peito", "pilar", "finda", "chama", "brabo", "piada", "mosto", "amena", "lápis", "meigo", "facto", "paira", "refém", "cútis", "surja", "museu", "passa", "pífia", "mesma", "tento", "ávida", "louça", "autos", "local", "acolá", "rumor", "páreo", "cocho", "feudo", "metiê", "optar", "geral", "forem", "urgia", "drama", "lasso", "folga", "poeta", "poema", "coral", "boato", "tetra", "teste", "clean", "hobby", "medir", "clima", "rubro", "ateia", "pacto", "busca", "aviso", "cetro", "feroz", "ponha", "móvel", "crime", "golpe", "idoso", "monge", "calmo", "tacha", "amiga", "lição", "açude", "daqui", "cacho", "vigia", "aroma", "plumo", "monte", "carta", "verde", "ecoar", "letal", "riste", "penta", "hoste", "pasmo", "vetar", "ébano", "briga", "falha", "swing", "fazia", "tribo", "conto", "rival", "troça", "fórum", "pedra", "já, já", "casar", "escol", "tarde", "roupa", "grama", "saldo", "súcia", "plebe", "manga", "bença", "chefe", "venha", "cover", "única", "itens", "lesse", "natal", "corso", "artur", "finjo", "fruto", "sósia", "civil", "plaga", "axila", "vento", "macro", "cargo", "úteis", "sarau", "átimo", "volta", "mangá", "ornar", "virar", "arado", "farta", "nuvem", "pinho", "berro", "vazão", "magna", "perco", "troca", "seixo", "catre", "amada", "fosso", "beijo", "légua", "tiver", "órgão", "viram", "gíria", "bruta", "jejum", "areia", "traje", "má-fé", "stand", "deste", "assar", "tição", "perto", "bruto", "inter",
  "mídia", "guria", "estro", "trato", "jogar", "tchau", "tutor", "renda", "amado", "surto", "porte", "nesse", "todas", "canso", "gabar", "ímpia", "feita", "bazar", "arfar", "recém", "pomar", "âmbar", "rural", "silvo", "vedar", "depor", "close", "irado", "grota", "varoa", "rocha", "nesta", "vadio", "odiar", "fossa", "cifra", "laudo", "pavor", "bucho", "negar", "aviar", "régio", "tenha", "santo", "xucro", "clero", "ferpa", "etapa", "visto", "canto", "nessa", "vagar", "densa", "minar", "bolsa", "logos", "segar", "vista", "mamãe", "lesão", "cenho", "molde", "marca", "cinto", "meche", "deram", "proto", "chula", "paiol", "invés", "horto", "cerca", "pasma", "calor", "cheia", "largo", "sótão", "ruído", "verão", "urdir", "burra", "morfo", "ágape", "velha", "coroa", "troco", "salmo", "penso", "lesto", "pugna", "dúbia", "final", "símio", "úbere", "letra", "vasta", "narco", "podar", "esgar", "fundo", "ceita", "ufano", "trago", "mocho", "ileso", "jazer", "dança", "linha", "folha", "frota", "ardis", "úmido", "bulir", "apear", "pólis",
  "cível", "piche", "pedro", "preço", "troço", "resto", "queda", "neste", "álamo", "peita", "manto", "matar", "culta", "áudio", "redor", "misto", "sofia", "monta", "cosmo", "folia", "seiva", "lábia", "mover", "barro", "chaga", "banto", "bolso", "limpo", "macho", "álbum", "barão", "retro", "logia", "justa", "campa", "gemer", "lutar", "porca", "nácar", "calvo", "louro", "venho", "axial", "punha", "farol", "chave", "mimar", "findo", "falsa", "veloz", "arroz", "bedel", "sabor", "demão", "calça", "zumbi", "fazes", "enjoo", "outra", "salva", "rente", "longo", "baixa", "firma", "vazia", "disso", "lucro", "canil", "quais", "coevo", "lousa", "toque", "torna", "solta", "louca", "sigla", "ousar", "dados", "gueto", "forro", "farto", "fugiu", "reler", "míope", "nariz", "subir", "urgir", "olhos", "sexto", "valer", "samba", "fátuo", "corar", "tumba", "vário", "bruxa", "diabo", "pagar", "repor", "custo", "penca", "xampu", "pluma", "mania", "viger", "modal", "cardo", "bugre", "sabiá", "lento", "hífen", "versa", "corte", "choça", "sugar",
  "sadio", "nesga", "ferir", "sócio", "harém"];



function termoGame() {

  let soma = Math.random() * (palavras.length - 1) + 1;

  let termo = palavras[parseInt(soma)];

  termo = termo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  console.log(termo)

  return termo;
}
//#endregion
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

  // Verifica se a div de novos inputs já existe, se não, cria uma nova
  let containerNovosInputs = document.getElementById('novosInputs');
  for (var i = 0; i < 6; i++) {
    if (!containerNovosInputs) {
      containerNovosInputs = document.createElement('div');
      containerNovosInputs.id = 'novosInputs';
      document.body.appendChild(containerNovosInputs);
    } else {
      // Se a div já existe, primeiro limpa seu conteúdo anterior
      containerNovosInputs = document.createElement('div');
      containerNovosInputs.id = 'novosInputs' + i;

      document.body.appendChild(containerNovosInputs);
    }
  }

  camposOriginais.forEach((campo, index) => {
    // Cria um novo input
    const novoInput = document.createElement('input');
    novoInput.type = 'text';
    novoInput.readOnly = true; // Torna o input readonly
    novoInput.style.backgroundColor = campo.style.backgroundColor; // Copia a cor de fundo
    novoInput.style.color = campo.style.color; // Copia a cor do texto
    novoInput.value = campo.value; // Copia o valor (opcional)
    novoInput.classList.add('campoLetraNew'); // Adiciona a classe para estilização (opcional)

    // Adiciona o novo input ao container
    containerNovosInputs.appendChild(novoInput);

    // Limpa o valor do input original e ajusta as cores para voltar ao padrão
    campo.value = '';
    campo.style.backgroundColor = 'white'; // Define a cor de fundo para branco
    campo.style.color = 'black'; // Define a cor do texto para preto
  });

  // Volta o foco para o primeiro input original
  if (camposOriginais.length > 0) {
    camposOriginais[0].focus();
  }
}


function reload() {
  return window.location.reload();

}
