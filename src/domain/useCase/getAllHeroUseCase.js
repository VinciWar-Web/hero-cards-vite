import HeroRepository from '../../data/repositories/heroRepository'

export default class GetAllHeroUseCase {
    async call() {
        return HeroRepository.getAllHero()
    }
}