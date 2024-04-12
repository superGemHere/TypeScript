class Pokemon {
    name: string;
    element: string;
    health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}

class Trainer {
    name: string;
    badges: number;
    pokemons: Pokemon[];

    constructor(name: string) {
        this.name = name;
        this.badges = 0;
        this.pokemons = [];
    }

    addPokemon(pokemon: Pokemon) {
        this.pokemons.push(pokemon);
    }

    receiveBadge() {
        this.badges++;
    }

    checkElement(element: string) {
        return this.pokemons.some(pokemon => pokemon.element === element);
    }

    decreasePokemonHealth() {
        this.pokemons.forEach(pokemon => {
            pokemon.health -= 10;
            if (pokemon.health <= 0) {
                this.removePokemon(pokemon);
            }
        });
    }

    private removePokemon(pokemon: Pokemon) {
        const index = this.pokemons.indexOf(pokemon);
        if (index !== -1) {
            this.pokemons.splice(index, 1);
        }
    }
}
let trainers: Trainer[] = [];

function findOrCreateTrainer(name: string): Trainer {
    let trainer = trainers.find(trainer => trainer.name === name);
    if (!trainer) {
        trainer = new Trainer(name);
        trainers.push(trainer);
    }
    return trainer;
}

function printTrainers() {
    const sortedTrainers = trainers.sort((a, b) => b.badges - a.badges);
    sortedTrainers.forEach(trainer => {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.pokemons.length}`);
    });
}

// Main function to process input
function processInput(input: string[]) {
    let isTournament: boolean = false;
    trainers = [];
    if(!isTournament){
        input.forEach(line => {
            if (isTournament) return;
            if (line === "Tournament"){
                 isTournament = true;
                 return;
            } 
            const [trainerName, pokemonName, pokemonElement, pokemonHealth] = line.split(" ");
            const health = parseInt(pokemonHealth);
    
            const trainer = findOrCreateTrainer(trainerName);
            const pokemon = new Pokemon(pokemonName, pokemonElement, health);
            trainer.addPokemon(pokemon);
        });
    }
    

    const tournamentElements = input.slice(input.indexOf("Tournament") + 1);

    tournamentElements.forEach(element => {
        if (element === "End") return;
        trainers.forEach(trainer => {
            if (trainer.checkElement(element)) {
                trainer.receiveBadge();
            } else {
                trainer.decreasePokemonHealth();
            }
        });
    });

    printTrainers();
}

processInput([
"Peter Charizard Fire 100",
"George Squirtle Water 38",
"Peter Pikachu Electricity 10",
"Tournament",
"Fire",
"Electricity",
"End"
]);
processInput([
"Sam Blastoise Water 18",
"Narry Pikachu Electricity 22",
"John Kadabra Psychic 90",
"Tournament",
"Fire",
"Electricity",
"Fire",
"End"
]);