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
