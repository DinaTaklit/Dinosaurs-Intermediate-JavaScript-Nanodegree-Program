/**
 * @description Represents a Human
 * @constructor
 * @param {string} name - name of the human
 * @param {number} feet - feet height of the human
 * @param {number} inches - inches height of the human
 * @param {number} weight - weight of the human
 * @param {string} diet - herbavor, omnivor or carnivor
 */
export default class Human {
    constructor(name, feet, inches, weight, diet) {
        this.name = name
        this.feet = feet
        this.inches = inches
        this.weight = weight
        this.diet = diet.toLowerCase()
    }
}
