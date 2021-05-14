import './styles/index.scss'
import dinos from '../dino.json'
import { createDinoOnjects, buildTiles, hideFrom } from './js/app'
import Human from './js/Human'

// Get compare button by id
const btn = document.getElementById('btn')

// On button click, prepare and display infographic
btn.addEventListener('click', () => {
    // Get user data using IFEE & create user
    const userData = (() => {
        const form = document.querySelector('form')
        const data = Object.fromEntries(new FormData(form).entries())
        return data
    })()

    // Create new user (Human) instance
    const user = new Human(
        userData.name,
        userData.feet,
        userData.inches,
        userData.weight,
        userData.diet
    )
    // Create dinosoraus objects
    const dinoseaurs = createDinoOnjects(dinos.Dinos)

    // Create tiles for dinoseaurs & user
    buildTiles(dinoseaurs, user)

    // Hide form from screen
    hideFrom()
})
