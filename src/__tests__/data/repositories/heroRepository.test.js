import { vi } from 'vitest'
import HeroRepository from '../../../data/repositories/heroRepository'

// Configura un mock para la función fetch en el entorno global
vi.mock('../../../data/repositories/heroRepository')

beforeEach(()=>{
    // Restablece los mocks antes de cada prueba
    HeroRepository.getAllHero.mockReset()
})

describe("Unit test in heroRepository.js", () => {

    test("Should return the heroes' information", async () => {

        // Datos de prueba
        const mockResponse = {
            hero: [
                {
                    id : 1,
                    photo : { url: 'https://example.com/photo.jpg' },
                    aliases : 'Superman',
                    fullName : 'Clark Kent',
                    publisher : 'DC Comics',
                    placeOfBirth : 'Smallville',
                    race : 'Kryptonian',
                    height : { feet: 6, inches: 2 },
                    weight : { pounds: 220 }
                }
            ],
            status: 200,
        }

        // Configurar el comportamiento simulado del método getAllHero
        HeroRepository.getAllHero.mockResolvedValue(mockResponse);

        // Llama a la data retornada del caso de uso
        const result = await new HeroRepository.getAllHero()

        // Realizar expectativas en el resultado simulado
        expect(result).toEqual({
            hero: [
                {
                    id : 1,
                    photo : { url: 'https://example.com/photo.jpg' },
                    aliases : 'Superman',
                    fullName : 'Clark Kent',
                    publisher : 'DC Comics',
                    placeOfBirth : 'Smallville',
                    race : 'Kryptonian',
                    height : { feet: 6, inches: 2 },
                    weight : { pounds: 220 }
                }
            ],
            status: 200,
        });
    })

})