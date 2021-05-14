import Dino from './Dino'

/**
 * @description Create dinos objects
 * @param {json} dions The dinos object array
 * @returns {array} The array of Dino instances
 */
export const createDinoOnjects = (dinos) =>
    dinos.map(
        (dino) =>
            new Dino(
                dino.species,
                dino.weight,
                dino.height,
                dino.diet,
                dino.where,
                dino.when,
                dino.fact
            )
    )

/**
 * @description Generate random fact for the dino
 * @param {object} dino The dinosaur object
 * @param {object} human The human object
 * @returns {string} return a random fact from the generated facts array
 */

const generateRandomFact = (dino, human = {}) => {
    const facts = [
        dino.fact,
        `I lived in ${dino.where}`,
        `I lived during ${dino.when}`,
    ]
    facts.push(dino.compareDiet(human.diet))
    facts.push(dino.compareWeight(human.weight))
    facts.push(dino.compareHeight(human.height))

    const randomIndex = Math.floor(Math.random() * facts.length)

    return facts[randomIndex]
}
