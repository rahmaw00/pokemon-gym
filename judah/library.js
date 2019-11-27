class Pokemon {
   constructor(name){
    if (name == 'Bulbasaur') {
    var i = 1;
  } else if (name == 'Ivysaur') {
    var i = 2;
  } else if (name == 'Venusaur') {
    var i = 3;
  } else if (name == 'Charmander') {
    var i = 4;
  } else if (name == 'Charmeleon') {
    var i = 5;
  } else if (name == 'Charizard') {
    var i = 6;
  }else if (name == 'Squirtle') {
    var i = 7;
  }else if (name == 'Wartortle') {
    var i = 8;
  }else if (name == 'Blastoise') {
    var i = 9;
  }else if (name == 'Caterpie') {
    var i = 10;
  }else if (name == 'Metapod') {
    var i = 11;
  }else if (name == 'Butterfree') {
    var i = 12;
  }else if (name == 'Weedle') {
    var i = 13;
  }else if (name == 'Kakuna') {
    var i = 14;
  }else if (name == 'Beedrill') {
    var i = 15;
  }

  fetch(`https://fizal.me/pokeapi/api/v2/id/${i}.json`)
   .then((resp) => {return resp.json() })
   .then((data) => {
     this.name = name
     this.hp = data.stats[0].base_stat
     this.attack = data.stats[4].base_stat
     this.defense = data.stats[3].base_stat
     // this.ability = data.abilities[1].ability.name
     this.ability = data.abilities[0].ability.name
     document.getElementById("bb").innerHTML=(Object.entries(Bulbasaur))
     document.getElementById("ii").innerHTML=(Object.entries(Ivysaur))
     document.getElementById("vv").innerHTML=(Object.entries(Venusaur))
     document.getElementById("cc").innerHTML=(Object.entries(Charmander))
     document.getElementById("chch").innerHTML=(Object.entries(Charmeleon))
     document.getElementById("chacha").innerHTML=(Object.entries(Charizard))
     document.getElementById("ss").innerHTML=(Object.entries(Squirtle))
     document.getElementById("ww").innerHTML=(Object.entries(Wartortle))
     document.getElementById("blbl").innerHTML=(Object.entries(Blastoise))
     document.getElementById("caca").innerHTML=(Object.entries(Caterpie))
     document.getElementById("mm").innerHTML=(Object.entries(Metapod))
     document.getElementById("bubu").innerHTML=(Object.entries(Butterfree))
     document.getElementById("wewe").innerHTML=(Object.entries(Weedle))
     document.getElementById("kk").innerHTML=(Object.entries(Kakuna))
     document.getElementById("bebe").innerHTML=(Object.entries(Beedrill))
   })
  }
}

var Bulbasaur = new Pokemon ('Bulbasaur')
var Ivysaur = new Pokemon ('Ivysaur')
var Venusaur = new Pokemon ('Venusaur')
var Charmander = new Pokemon ('Charmander')
var Charmeleon = new Pokemon ('Charmeleon')
var Charizard = new Pokemon ('Charizard')
var Squirtle = new Pokemon ('Squirtle')
var Wartortle = new Pokemon ('Wartortle')
var Blastoise = new Pokemon ('Blastoise')
var Caterpie = new Pokemon ('Caterpie')
var Metapod = new Pokemon ('Metapod')
var Butterfree = new Pokemon ('Butterfree')
var Weedle = new Pokemon ('Weedle')
var Kakuna = new Pokemon ('Kakuna')
var Beedrill = new Pokemon ('Beedrill')


function myMove() {
  var elem = document.getElementById("animate");
  elem.innerHTML= '<h1>Thanks for watching!</h1>'
  var pos = 0;
  var id = setInterval(frame,1);
  function frame() {
    if (pos == 1300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = pos + "px";
    }
  }
}
