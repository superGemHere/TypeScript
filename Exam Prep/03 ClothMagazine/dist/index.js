class Cloth {
    color;
    size;
    type;
    constructor(color, size, type) {
        this.color = color;
        this.size = size;
        this.type = type;
    }
    toString() {
        return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
    }
}
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.capacity > 0) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        let itemToRemove = this.clothes.find(obj => obj.color == color);
        if (itemToRemove) {
            let index = this.clothes.indexOf(itemToRemove);
            let beforeSlice = this.clothes.slice(0, index);
            let afterIndex = this.clothes.slice(index);
            return true;
        }
        else {
            return false;
        }
    }
    getSmallestCloth() {
        // if (this.clothes.length === 0) return null;
        return this.clothes.reduce((prev, curr) => prev.size < curr.size ? prev : curr);
    }
    getCloth(color) {
        return this.clothes.find(obj => obj.color === color);
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        let output = `${this.type} magazine contains:\n`;
        let orderedClothes = this.clothes.sort((a, b) => a.size - b.size);
        orderedClothes.forEach(cloth => output += `${cloth}\n`);
        return output.trim();
    }
}
function main() {
    // Initialize the repository (Magazine) 
    const magazine = new Magazine("Zara", 20);
    // Initialize entity (Cloth) 
    const cloth1 = new Cloth("red", 36, "dress");
    // Print Cloth 
    console.log(cloth1.toString());
    // Product: dress with size 36, color red 
    // Add Cloth 
    magazine.addCloth(cloth1);
    // Remove Cloth 
    console.log(magazine.removeCloth("black"));
    // false 
    const cloth2 = new Cloth("brown", 34, "t-shirt");
    const cloth3 = new Cloth("blue", 32, "jeans");
    // Add Cloth 
    magazine.addCloth(cloth2);
    magazine.addCloth(cloth3);
    // Get smallest cloth 
    const smallestCloth = magazine.getSmallestCloth();
    console.log(smallestCloth?.toString());
    // Product: jeans with size 32, color blue 
    // Get Cloth 
    const getCloth = magazine.getCloth("brown");
    // Product: t-shirt with size 34, color brown 
    console.log(getCloth?.toString());
    console.log(magazine.report());
    // Zara magazine contains: 
    // Product: jeans with size 32, color blue 
    // Product: t-shirt with size 34, color brown 
    // Product: dress with size 36, color red 
}
main();
//# sourceMappingURL=index.js.map