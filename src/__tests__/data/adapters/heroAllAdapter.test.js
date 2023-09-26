import heroAllAdapter from '../../../data/adapters/heroAllAdapter'

describe("Unit test in heroAllAdapter.js", () => {

    test("verify that the heroAllAdapter function receives an input JSON object and creates an instance of heroModel", () => {

        // Datos de prueba
        const json = {
            id: 1,
            images: { url: 'https://example.com/photo.jpg' },
            name: 'Superman',
            biography: {
                fullName: 'Clark Kent',
                publisher: 'DC Comics',
                placeOfBirth: 'Smallville',
            },
            appearance: {
                race: 'Kryptonian',
                height: { feet: 6, inches: 2 },
                weight: { pounds: 220 },
            },
        };

        // Llama a la función heroAllAdapter con los datos de prueba
        const hero = heroAllAdapter(json);

        // Verifica que la instancia se haya creado correctamente
        expect(hero).toBeDefined();

        // Verifica que las propiedades de hero coincidan con los valores esperados
        expect(hero.id).toBe(json.id);
        expect(hero.photo).toBe(json.images);
        expect(hero.aliases).toBe(json.name);
        expect(hero.fullName).toBe(json.biography.fullName);
        expect(hero.publisher).toBe(json.biography.publisher);
        expect(hero.placeOfBirth).toBe(json.biography.placeOfBirth);
        expect(hero.race).toBe(json.appearance.race);
        expect(hero.height).toBe(json.appearance.height);
        expect(hero.weight).toBe(json.appearance.weight);

    })
})