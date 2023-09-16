export default class heroModel {
    /**
     * @param {number} id
     * @param {object} photo
     * @param {string} aliases
     * @param {string} fullName
     * @param {string} publisher
     * @param {string} placeOfBirth
     * @param {string} race
     * @param {object} height
     * @param {object} weight
     * 
     * @returns {heroModel}
     */
    constructor(id, photo, aliases, fullName, publisher, placeOfBirth, race, height, weight) {
        this.id = id
        this.photo = photo
        this.aliases = aliases
        this.fullName = fullName
        this.publisher = publisher
        this.placeOfBirth = placeOfBirth
        this.race = race
        this.height = height
        this.weight = weight
    }
}
