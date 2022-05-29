var items = [
  {
    name: "Mil Graus",
    author: "Renascer Praise",
    type: "Agitado",
  },
  {
    name: "Ao único",
    author: "Eli Soares",
    type: "Adoração",
  },
  {
    name: "Eu me rendo",
    author: "Leonardo Gonçalves",
    type: "Adoração",
  },
];

var btnEscolha = document.getElementById("show_music");
var spanWindow = document.getElementById("louvores");


btnEscolha.addEventListener("click", () => {
  // mostrar uma lista de itens sem repetir os nomes
  spanWindow.innerHTML = "";
  var listaItens = [];
  var qtdeMusic = document.getElementById("quantity").value;
  for (var i = 0; i <= qtdeMusic-1; i++) {
    var r = Math.floor(Math.random() * items.length);
    // console.log(items[r].name);
    if (listaItens.indexOf(items[r].name) == -1) {
      listaItens.push(items[r].name);
      // um li par para cada item
      var li = document.createElement("li");
      li.innerHTML = items[r].name + " - " + items[r].author + " - " + items[r].type;
      spanWindow.appendChild(li);
    }
  }
});
