export function waitFor(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}

export function getRandomID() {
    return getRandomIDPart() + getRandomIDPart() + '-' + getRandomIDPart() + '-' + getRandomIDPart() + '-' + getRandomIDPart() + '-' + getRandomIDPart() + getRandomIDPart() + getRandomIDPart()
}

function getRandomIDPart() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}

export function getDashedString(string) {
    return string.trim().toLowerCase().replaceAll(/ /g, "-")
}

export function getUndashedString(string) {
    return capitalizeWords(string.replaceAll('-', ' '))
}

function capitalizeWords(string) {
    if (!string)
        return

    return string
        .split(' ')
        .map((word) => capitalizeFirstLetter(word))
        .join(' ')
}

function capitalizeFirstLetter(string) {
    if (!string)
        return

    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}