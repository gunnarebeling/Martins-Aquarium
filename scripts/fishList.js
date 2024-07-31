import { database } from './fishData.js';
const fishListData= database.fish
let revisedFishList = []
export const fishList = () => {
    
    // Generate an HTML representation of each fish

    let fishListHTML = '<h1>Fish</h1>' 
      fishListHTML += `<div class="fish-List-Container" >` ;
    for (const fish of revisedFishList) {
        fishListHTML += `<div class="fishContainer">\n`;
        fishListHTML += `<h1 class="fishheader">${fish.name}</h1>\n`;
        fishListHTML += `<img src="${fish.image}" alt = "${fish.name} image" class="fishimage">`;
        fishListHTML += `<p>Species: ${fish.species} </p>`;
        fishListHTML += `<p>\slength: ${fish.length}</p>`;
        fishListHTML += `<p> Location: ${fish.location}</p>`;
        fishListHTML += `<p>Diet: ${fish.diet}</p>`;
        fishListHTML += `</div>`

        
        
    }
    fishListHTML += `</div>`;
    return fishListHTML


};
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    
    let holyFish = []

    for (const fish of fishListData) {
        if(fish.length % 3 === 0 ) {
            holyFish.push(fish);
            

        }

    }
    holyFish.sort((a,b)=> a.length - b.length)
    revisedFishList.push(...holyFish)
    
    
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = []

    for (const fish of fishListData) {
        if(fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldierFish.push(fish);

        }

    }
    soldierFish.sort((a,b)=> a.length - b.length)
    revisedFishList.push(...soldierFish)
    
    return soldierFish

}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = []

    for (const fish of fishListData) {
        if(fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish);

        }

    }
    regularFish.sort((a,b)=> a.length - b.length)
    revisedFishList.push(...regularFish)
    
    return regularFish


}