
//API CALL Request
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);
    let pokemonObject = new Pokemon(data)
    addToWebpage(pokemonObject)
    return pokemonObject
  }
};
// API CALL IS HAPPENING HERE.
xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`, true);
xhttp.send();
}

// A FUNCTION THAT DISPLAYS THE DATA FROM THE API ON THE SCREEN.
function addToWebpage(pokemonObject) {
  let node = document.createElement("D1");
  //I creates a <div> with a <img> tag inside which "src=" the info for the sprites and allows it to show on the screen.
  console.log(pokemonObject.sprites);
  //Then I added everything with string concantanation (putting string together)
  let textstuff = "<div><img src="+ `${pokemonObject.sprites}`+ ">" +
     "<h3>" + `${pokemonObject.name}` + "</h3><p>ID:" +
     `${pokemonObject.id}` +"</p><p> HP: " +
     `${pokemonObject.hp}` +"</p><p> Attack: " +
     `${pokemonObject.attack}`+"</p><p> Defense: " +
     `${pokemonObject.defense}`+"</p><p> Abilities: " +
     `${pokemonObject.abilities}`+"</p></div>"
  node.innerHTML = textstuff//make sure you target the innerHTML

// Holds the API objects in the variable 'data' stated above.
class Pokemon {
   constructor(data){
     this.sprites = data.sprites.front_default
     this.name = data.name
     this.id = data.id
     this.hp = data.stats[5].base_stat
     this.attack = data.stats[4].base_stat
     this.defense = data.stats[3].base_stat
     this.abilities = data.abilities.map(ability => ability.ability.name)
  }
}

// Creating a trainer class to hold a empty array (to hold my pokemon)
class Trainer1 {
  constructor(pokeyArray) {
    this.teamRed = []
  }
  all = () => {
    return this.teamRed
  }
  get = (name) => {
    for (let i = 0; i < teamRed.length; i++) {
      if (this.teamRed[i].name == name) {
        return this.teamRed[i]
      }
    }
  }
  //pushes pokemon into the trainer array (comes up as undefined needs fixing)
  addPokeTeamRed(pokemon) {
    if (this.teamRed.length < 3) {
      this.teamRed.push(pokemon)
    } else {
      console.log(`${pokemon.name} not on team red.`);
    }
  }
}
// gave my trainer class a fictious trainer name
let kaleab = new Trainer1()


let pikachu = getPokemon("pikachu")
let blaziken = getPokemon("blaziken")
let geodude = getPokemon("geodude")
kaleab.addPokeTeamRed(pikachu)
kaleab.addPokeTeamRed(blaziken)
kaleab.addPokeTeamRed(geodude)

////////////////////////////////////////////////////

class Trainer2 {
  constructor(pokeyArray) {
    this.teamRed = []
  }
  all = () => {
    return this.teamRed
  }
  get = (name) => {
    for (let i = 0; i < teamRed.length; i++) {
      if (this.teamRed[i].name == name) {
        return this.teamRed[i]
      }
    }
  }
  //pushes pokemon into the trainer array (comes up as undefined needs fixing)
  addPokeTeamRed(pokemon) {
    if (this.teamRed.length < 3) {
      this.teamRed.push(pokemon)
    } else {
      console.log(`${pokemon.name} not on team red.`);
    }
  }
}
// gave my trainer class a fictious trainer name
let ramata = new Trainer2()


let pikachu = getPokemon("pikachu")
let blaziken = getPokemon("blaziken")
let geodude = getPokemon("geodude")
ramata.addPokeTeamRed(pikachu)
ramata.addPokeTeamRed(blaziken)
ramata.addPokeTeamRed(geodude)

/////////////////////////////////////////////////////////

class Trainer3 {
  constructor(pokeyArray) {
    this.teamRed = []
  }
  all = () => {
    return this.teamRed
  }
  get = (name) => {
    for (let i = 0; i < teamRed.length; i++) {
      if (this.teamRed[i].name == name) {
        return this.teamRed[i]
      }
    }
  }
  //pushes pokemon into the trainer array (comes up as undefined needs fixing)
  addPokeTeamRed(pokemon) {
    if (this.teamRed.length < 3) {
      this.teamRed.push(pokemon)
    } else {
      console.log(`${pokemon.name} not on team red.`);
    }
  }
}
// gave my trainer class a fictious trainer name
let mahnoor = new Trainer3()


let pikachu = getPokemon("pikachu")
let blaziken = getPokemon("blaziken")
let geodude = getPokemon("geodude")
mahnoor.addPokeTeamRed(pikachu)
mahnoor.addPokeTeamRed(blaziken)
mahnoor.addPokeTeamRed(geodude)

//////////////////////////////////////////////////////////////////

class Trainer4 {
  constructor(pokeyArray) {
    this.teamRed = []
  }
  all = () => {
    return this.teamRed
  }
  get = (name) => {
    for (let i = 0; i < teamRed.length; i++) {
      if (this.teamRed[i].name == name) {
        return this.teamRed[i]
      }
    }
  }
  //pushes pokemon into the trainer array (comes up as undefined needs fixing)
  addPokeTeamRed(pokemon) {
    if (this.teamRed.length < 3) {
      this.teamRed.push(pokemon)
    } else {
      console.log(`${pokemon.name} not on team red.`);
    }
  }
}
// gave my trainer class a fictious trainer name
let judah = new Trainer4()


let pikachu = getPokemon("pikachu")
let blaziken = getPokemon("blaziken")
let geodude = getPokemon("geodude")
judah.addPokeTeamRed(pikachu)
judah.addPokeTeamRed(blaziken)
judah.addPokeTeamRed(geodude)

/////////////////////////////////////////////////////////

class Trainer5 {
  constructor(pokeyArray) {
    this.teamRed = []
  }
  all = () => {
    return this.teamRed
  }
  get = (name) => {
    for (let i = 0; i < teamRed.length; i++) {
      if (this.teamRed[i].name == name) {
        return this.teamRed[i]
      }
    }
  }
  //pushes pokemon into the trainer array (comes up as undefined needs fixing)
  addPokeTeamRed(pokemon) {
    if (this.teamRed.length < 3) {
      this.teamRed.push(pokemon)
    } else {
      console.log(`${pokemon.name} not on team red.`);
    }
  }
}
// gave my trainer class a fictious trainer name
let james = new Trainer5()


let pikachu = getPokemon("pikachu")
let blaziken = getPokemon("blaziken")
let geodude = getPokemon("geodude")
james.addPokeTeamRed(pikachu)
james.addPokeTeamRed(blaziken)
james.addPokeTeamRed(geodude)
