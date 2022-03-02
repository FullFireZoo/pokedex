const pokedex = document.getElementById('pokedex');
const searchBar = document.querySelector('input');
let pokemonArray =[];

let starCountRef = firebase.database().ref('pokemon');
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      displayPokemon(data)
      // un object transformer en tableau
      const asArray = Object.entries(data);
      pokemonArray = asArray.flat().filter((pokemon,i) => {
      if (i%2){
      return pokemon
      }})});

// parcour l'objet detecter si pair ou impair et creer un tableau d'objet


// writeUserData Permet d'ajouter des données vers Firebase
function writeUserData(userId, Nom, Region, Type) {
  firebase.database().ref('pokemon/' + userId).set({
    Nom: Nom,
    Region: Region,
    Type: Type
  });
}

// displayPokemon inject les Pokemon dans l'HTML 
const displayPokemon = (pokemon) => {
  pokedex.innerHTML ="";
  for(let i in pokemon){
    pokedex.innerHTML +=
      `<li class="card">
        <h2>${pokemon[i].Nom}</h2>
        <p>${pokemon[i].Type} <br> ${pokemon[i].Region}</p>
      </li>`
 }


 searchBar.addEventListener('keyup', () => {
  let input = searchBar.value.toLowerCase()
  console.log(pokemonArray)
  const filter = pokemonArray.filter(pokemon => {
      return (
      pokemon.Nom.toLowerCase().includes(input) || pokemon.Type.toLowerCase().includes(input)
      )
    
  })
  displayPokemon(filter)
})
};
