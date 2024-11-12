export function waitFor(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}

export function getRandomID() {
    return getRandomIDPart() + getRandomIDPart() + '-' + getRandomIDPart() + '-' + getRandomIDPart() + '-' + getRandomIDPart() + '-' + getRandomIDPart() + getRandomIDPart() + getRandomIDPart()
}

function getRandomIDPart() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}