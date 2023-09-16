import heroModel from '../models/heroModel'

/**
 *
 * @param {object} json
 * @returns heroModel
 */
const heroAllAdapter = (json) => {
    return new heroModel(
        json.id,
        json.images,
        json.name,
        json.biography.fullName,
        json.biography.publisher,
        json.biography.placeOfBirth,
        json.appearance.race,
        json.appearance.height,
        json.appearance.weight,
    )
}

export default heroAllAdapter