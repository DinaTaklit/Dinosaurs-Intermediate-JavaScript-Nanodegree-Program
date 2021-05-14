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

    /**
     * @description Compare human diet with dino diet.
     * @param {string} humanDiet The human diet
     * @returns {string} The result of the comparison as a fact
     */
    compareDiet(humanDiet) {
        return humanDiet === this.diet
            ? `We are both ${humanDiet}s`
            : `You are ${humanDiet}, but I am ${this.diet}`
    }

    /**
     * @description Compare human weight with dino weight.
     * @param {string} humanWeight The human
     * @returns {string} The result of the comparison as a fact
     */
    compareWeight(humanWeight) {
        return this.weight === humanWeight
            ? 'Aww we have same weight :o!'
            : this.weight > humanWeight
            ? `I am heavier than you :)`
            : `OMG! you are heavier than me!!`
    }

    /**
     * @description Compare human height with dino height.
     * @param {string} humanHeightFeet The human Height feet part
     * @param {string} humanHeightInches The human Height Inches part
     * @returns {string} The result of the comparison as a fact
     */
    compareHeight(humanHeightFeet, humanheightInches) {
        const humanHeight = humanHeightFeet * 12 + humanheightInches
        return humanHeight === this.height
            ? 'We have the same height xD'
            : humanHeight < this.height
            ? 'I am taller than you :)'
            : 'You are taller than me :o!'
    }
}
