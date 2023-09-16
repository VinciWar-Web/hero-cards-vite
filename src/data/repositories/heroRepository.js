import { router } from '../../common/utils/router'
import heroAllAdapter from '../adapters/heroAllAdapter';

export default class HeroRepository {
    /**
     *
     * @returns {Promise<heroModel>}
     */
    static async getAllHero() {
        try {
            const body = await fetch(`${router.baseUrl}/all.json`)
			const resp = await body.json();

            const data = resp.map( hero => heroAllAdapter(hero))
            const newData = JSON.parse(JSON.stringify(data))
            const status = body.status

            return { newData, status }
            
        } catch (error) {
            console.log(error)
        }
    }

    /**
    *
    * @returns {Promise<heroModel>}
    */
    static async getHero( id ) {
        try {
            const body = await fetch(`${router.baseUrl}/id/${id}.json`)
            const resp = await body.json();

            const data = heroAllAdapter(resp)
            const newData = JSON.parse(JSON.stringify(data))
            const status = body.status

            return { newData, status }
            
        } catch (error) {
            console.log(error)
        }
    }
}