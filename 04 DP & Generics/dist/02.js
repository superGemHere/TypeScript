class CompareElements {
    elements;
    constructor(elements) {
        this.elements = elements;
    }
    compare(elToCompare) {
        let count = 0;
        for (const element of this.elements) {
            if (element === elToCompare) {
                count++;
            }
        }
        return count;
    }
}
const c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c.compare('b'));
let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(d.compare(1));
//# sourceMappingURL=02.js.map