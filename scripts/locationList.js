import { database  } from "./fishData.js";
export const locationList = () => {
    // Generate an HTML representation of each fish
    let locationsHTML = '<h1>Locatons<h1>\n';
    locationsHTML += `<article class="locationsContainer">`
    const locations = database.locations;
    for (const location of locations) {
        locationsHTML += `  <section class="location-Container"> ${location.country}</section>\n`;
        
    }
    locationsHTML += `</article>`;
    return locationsHTML;
};