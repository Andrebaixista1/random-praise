var items = [
  {
    name: "A casa é sua",
    author: "Casa Worship",
    type: "Convocação",
  },
  {
    name: "A Ele a Glória",
    author: "Diante do trono",
    type: "Declaração",
  },
  {
    name: "A igreja vem",
    author: "Anderson Freire",
    type: "Convocação",
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
      name:"Cultura do céu",
      author: "Davi Fernandes",
      type:"Convocação"
  },
  {
      name: "Deus está aqui",
      author:"Eli Soares",
      type:"Convocação"
  },
  {
      name: "Eu vejo a glória",
      author:"Fernanda Brum",
      type:"Convocação"
  },
  {
      name:"Festa",
      author:"Davi Sacer",
      type: "Convocação"
  },
  {
      name: "Hosana",
      author:"Gabriela Rocha",
      type:"Convocação"
  },
  {
      name:"Liberdade",
      author:"Laura Souguelis"
  },
  {
      name:"Mil graus",
      author:"Renascer Praise",
      type:"Convocação"
  },
  {
      name:"Para que entre o rei da glória",
      author:"Morada",
      type:"Convocação"
  },
  {
      name:"Prosperarei",
      author:"Trazendo a arca",
      type:"Convocação"
  },
  {
      name:"Quando a igreja louva",
      author:"Davi Sacer",
      type:"Convocação"
  }
];

var btnEscolha = document.getElementById("show_music");
var spanWindow = document.getElementById("louvores");

btnEscolha.addEventListener("click", () => {
  // mostrar uma lista de itens sem repetir os nomes
  spanWindow.innerHTML = "";
  var listaItens = [];
  var qtdeMusic = document.getElementById("quantity").value;
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
});
