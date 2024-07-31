import { fishList, mostHolyFish,soldierFish,regularFish } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
let fishHTML = fishList(mostHolyFish(),soldierFish(),regularFish());


// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

//Render each HTML string to the correct DOM element
const fishListHTML = document.getElementById("fishList");
fishListHTML.innerHTML = fishHTML;

const tipElement = document.getElementById("tipList");
tipElement.innerHTML = tipHTML;

const locationElement = document.getElementById("locationList");
locationElement.innerHTML = locationHTML;