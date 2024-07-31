import { database } from "./fishData.js";
export const tipList = () => {
    // Generate an HTML representation of each fish
    let tipListHTML = '<div class="tipcontainer">';
     tipListHTML += '<h1>Tips</h1>';
    const tips = database.tips;
    for (const tip of tips) {
        tipListHTML += `<ul class="tips">\n`;
        tipListHTML+=  `    <li class="tip">topic: ${tip.topic}</li>\n`;
        tipListHTML += `    <li class ="tip">text: ${tip.text}</li>\n`;
        tipListHTML += `</ul>`
        
    }
    tipListHTML += '</div>'
    return tipListHTML
};