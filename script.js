// Assignment 1: Blacksmith — The Tiny Forge
// Pseudocode:
// If the forge has at least 30 heat, make one sword and remove 30 heat.
// If the forge has less than 30 heat, do not make a sword.
// After the attempt, update the forge display.
// Select the page elements

const forge = document.querySelector("#forge");
const forgeImage = document.querySelector("#forge-image");
const forgeStatus = document.querySelector("#forge-status");
const heatValue = document.querySelector("#heat-value");
const swordCount = document.querySelector("#sword-count");
const actionMessage = document.querySelector("#action-message");

// State variables
let heat = 20;
let swordsMade = 0;

function getForgeStatus(heatValue) {
    if (heatValue < 30) {
        return "Too cold";
    } else if (heatValue < 70) {
        return "Ready to forge";
    } else {
        return "Roaring fire";
    }
}

function updateForge() {
    const status = getForgeStatus(heat);

    heatValue.textContent = heat;
    swordCount.textContent = swordsMade;
    forgeStatus.textContent = status;

    forge.classList.remove("is-cold", "is-ready", "is-roaring");

    if (status === "Too cold") {
        forge.classList.add("is-cold");
        forgeImage.src = "assets/forge-cold.svg";
        forgeImage.alt = "A stone forge with dark coals and no flames";
    } else if (status === "Ready to forge") {
        forge.classList.add("is-ready");
        forgeImage.src = "assets/forge-ready.svg";
        forgeImage.alt = "A stone forge with a small orange fire";
    } else {
        forge.classList.add("is-roaring");
        forgeImage.src = "assets/forge-roaring.svg";
        forgeImage.alt = "A stone forge with tall bright flames and sparks";
    }
}

function resetForge() {
    heat = 20;
    swordsMade = 0;
    actionMessage.textContent = "Welcome to the forge. Add heat to begin.";
    updateForge();
}


function heatForge(amount) {
    heat += amount;

    if (heat > 100) {
        heat = 100;
    }

    actionMessage.textContent = "The forge has been heated.";
    updateForge();
}
function makeSword() {
    if (heat >= 30) {
        heat -= 30;
        swordsMade += 1;
        actionMessage.textContent = "You made a sword!";
    } else {
        actionMessage.textContent = "The forge is too cold. You need more heat.";
    }

    updateForge();
}
resetForge();