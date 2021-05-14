/**
 * @description Respresents a dinosaur
 * @constructor
 * @param {string} species - The species of the dinosaur
 * @param {number} weight - The weight of the dinosaur
 * @param {number} height - The height of the dinosaur
 * @param {string} diet - The diet of the dinosaur
 * @param {string} where - Where the dinosaur was located
 * @param {string} when - The epoch the dinosaur was active
 * @param {string} fact - A given fact about the dinosaur
 */

export default class Dino {
    constructor(species, weight, height, diet, where, when, fact) {
        this.species = species
        this.weight = weight
        this.height = height
        this.diet = diet
        this.where = where
        this.when = when
        this.fact = fact
    }
}
