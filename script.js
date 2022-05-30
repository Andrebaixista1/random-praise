var items = [
  {
    name: "A Ele a Glória",
    author: "Diante do trono",
    type: "Declaração",
  },
  {
    name: "A tua glória me atrai",
    author: "Marcos Freire",
    type: "Declaração",
  },
  {
    name: "Abba",
    author: "Laura Souguelis",
    type: "Encontro",
  },
  //    ---- Convocação ----
  {
    name: "A casa é sua",
    author: "Casa Worship",
    type: "Convocação",
  },
  {
    name: "A igreja vem",
    author: "Anderson Freire",
    type: "Convocação",
  },
  {
    name: "Abra os olhos do meu coração",
    author: "David Quilan",
    type: "Convocação",
  },
  {
    name: "Algo novo",
    author: "Kemuel",
    type: "Convocação",
  },
  {
    name: "Aproveite a liberdade",
    author: "Igreja Bíblica da Paz",
    type: "Convocação",
  },
  {
    name: "Atos 2",
    author: "Gabriela Rocha",
    type: "Convocação",
  },
  {
    name: "Aumenta o fogo",
    author: "Nivea Soares",
    type: "Convocação",
  },
  {
    name: "Aviva-nos",
    author: "Davi Fernandes",
    type: "Convocação",
  },
  {
    name: "Cidadãos do Céus",
    author: "Trazendo a Arca",
    type: "Convocação",
  },
  {
    name: "Cultura do céu",
    author: "Davi Fernandes",
    type: "Convocação",
  },
  {
    name: "Deus está aqui",
    author: "Eli Soares",
    type: "Convocação",
  },
  {
    name: "Eu vejo a glória",
    author: "Fernanda Brum",
    type: "Convocação",
  },
  {
    name: "Festa",
    author: "Davi Sacer",
    type: "Convocação",
  },
  {
    name: "Hosana",
    author: "Gabriela Rocha",
    type: "Convocação",
  },
  {
    name: "Liberdade",
    author: "Laura Souguelis",
    type: "Convocação",
  },
  {
    name: "Mil graus",
    author: "Renascer Praise",
    type: "Convocação",
  },
  {
    name: "Para que entre o rei da glória",
    author: "Morada",
    type: "Convocação",
  },
  {
    name: "Prosperarei",
    author: "Trazendo a arca",
    type: "Convocação",
  },
  {
    name: "Quando a igreja louva",
    author: "Davi Sacer",
    type: "Convocação",
  },
  {
    name: "Que se abram os céus",
    author: "Nivea Soares",
    type: "Convocação",
  },
  {
    name: "Rei meu",
    author: "Aline Barros",
    type: "Convocação",
  },
  {
    name: "Santo Espirito",
    author: "Laura Souguelis",
    type: "Convocação",
  },
  {
    name: "Santo, Santo, Santo",
    author: "Renascer Praise",
    type: "Convocação",
  },
  {
    name: "Senhor te quero (eu te busco)",
    author: "Vineyard",
    type: "Convocação",
  },
  {
    name: "Vem Senhor enche este lugar",
    author: "Quatro por um",
    type: "Convocação",
  },
  {
    name: "Vitória no deserto",
    author: "Aline Barros",
    type: "Convocação",
  },
  {
    name: "Voar como águia",
    author: "Renascer Praise",
    type: "Convocação",
  },
  {
    name: "Vou te alegrar",
    author: "Aline Barros",
    type: "Convocação",
  },
];

var btnEscolha = document.getElementById("show_music");
var spanWindow = document.getElementById("louvores");

btnEscolha.addEventListener("click", () => {
  // mostrar uma lista de itens sem repetir os nomes
  spanWindow.innerHTML = "";
  var listaItens = [];
  var qtdeMusic = document.getElementById("quantity").value;
  if (qtdeMusic <= 0) {
    alert("Digite um valor válido !");
  } else {
    for (var i = 0; i <= qtdeMusic - 1; i++) {
      var r = Math.floor(Math.random() * items.length);
      // console.log(items[r].name);
      if (listaItens.indexOf(items[r].name) == -1) {
        listaItens.push(items[r].name);

        var li = document.createElement("li");
        li.innerHTML = `${items[r].name} - ${items[r].author} - ${items[r].type}`;
        spanWindow.appendChild(li);
      }
    }
  }
});
