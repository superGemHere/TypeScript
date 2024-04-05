interface Hero {
    name: string;
    level: number;
    items?: string[];
}

function createHero(arr: string[]): void {
    arr.forEach((heroLine: string) => {
        let currentHero: string[] = heroLine.split(" / ");
        let hero: Hero = {
            name: currentHero[0],
            level: Number(currentHero[1]),
            // items: currentHero[2].split(", ")
        }
        let string: string = `Hero: ${hero.name}\nlevel => ${hero.level}`;
        currentHero[2] ? hero.items = currentHero[2].split(", ") : null;
        currentHero[2] ? string = string + `\nitems => ${currentHero[2]}` : null;

        console.log(string);
    })
}

createHero([ 'Isacc / 25 ', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara' ])
createHero(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara'])