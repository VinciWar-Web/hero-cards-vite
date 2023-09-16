import HeroRepository from '../../data/repositories/heroRepository'

export default class GetHeroUseCase {
    async call(id) {
        return HeroRepository.getHero(id)
    }
}