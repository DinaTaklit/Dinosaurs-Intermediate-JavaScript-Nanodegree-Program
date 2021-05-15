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

/**
 * @description Create dinos tile array objects
 * @param {array} dinos  Array of dinos objects
 * @param {object} human The human object
 * @returns {array} return an array containing dinos tiles{title, image, fact}
 */

const dinoTiles = (dinos, human = {}) =>
    dinos.map((dino) => ({
        title: dino.species,
        image: `${encodeURI(dino.species.toLowerCase())}.png`,
        fact:
            dino.species === 'Pigeon'
                ? dino.fact
                : generateRandomFact(dino, human),
    }))

/**
 * @description Create html Tile
 * @param {object} tile The tile object containing
 * the tile title, image and fact
 * @returns {HTMLElement} return the tile html element
 */

const createTile = (tile) => {
    const tileDom = document.createElement('div')
    tileDom.classList.add('grid-item')
    const gridString = `
        <h3> ${tile.title}</h3>
        <img src="./assets/images/${tile.image}" alt ="${tile.title}"/>
        <p>${tile.fact}</p>
    `
    tileDom.innerHTML = gridString
    return tileDom
}

/**
 * @description Build tiles and inject them to the dom
 * @param {array} dinos  Array of dinos objects
 * @param {object} human The human object
 */
export const buildTiles = (dinos, human) => {
    // Get the grid root
    const grid = document.querySelector('#grid')

    // Get dinos tiles
    const tiles = dinoTiles(dinos, human)

    // Add the human tile in the middle
    tiles.splice(4, 0, {
        title: human.name,
        image: `human.png`,
        fact: `Name: ${human.name}, diet:${human.diet},
            weight: ${human.weight}, height ${human.feet}
            feet and ${human.inches} inches`,
    })

    // Add tiles to the DOM grid element
    tiles.forEach((tile) => {
        // create a tile
        const tileDom = createTile(tile)
        // add tile to the dom
        grid.appendChild(tileDom)
    })
}

/**
 * @description Remove form from the screen
 */
export const hideFrom = () => {
    const form = document.querySelector('#dino-compare')
    form.style.display = 'none'
}
