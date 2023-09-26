import heroModel from '../../../data/models/heroModel'


describe("Unit test in heroModel.js", () => {

    test("Verify that the values of class heroModel match", () => {

        // Datos de prueba
        const id = 1;
        const photo = { url: 'https://example.com/photo.jpg' };
        const aliases = 'Superman';
        const fullName = 'Clark Kent';
        const publisher = 'DC Comics';
        const placeOfBirth = 'Smallville';
        const race = 'Kryptonian';
        const height = { feet: 6, inches: 2 };
        const weight = { pounds: 220 };

        // Crea una instancia de heroModel
        const hero = new heroModel(
            id,
            photo,
            aliases,
            fullName,
            publisher,
            placeOfBirth,
            race,
            height,
            weight
        );

        // Verifica que la instancia se haya creado correctamente
        expect(hero).toBeDefined();// valida que la instancia de la clase heroModel se haya creado de manera correcta
        expect(hero.id).toBe(id);
        expect(hero.photo).toBe(photo);
        expect(hero.aliases).toBe(aliases);
        expect(hero.fullName).toBe(fullName);
        expect(hero.publisher).toBe(publisher);
        expect(hero.placeOfBirth).toBe(placeOfBirth);
        expect(hero.race).toBe(race);
        expect(hero.height).toBe(height);
        expect(hero.weight).toBe(weight);
    })


    test("Verify that the data types of the heroModel class match", () => {

        // Datos de prueba
        const id = 1;
        const photo = { url: 'https://example.com/photo.jpg' };
        const aliases = 'Superman';
        const fullName = 'Clark Kent';
        const publisher = 'DC Comics';
        const placeOfBirth = 'Smallville';
        const race = 'Kryptonian';
        const height = { feet: 6, inches: 2 };
        const weight = { pounds: 220 };

        // Crea una instancia de heroModel
        const hero = new heroModel(
            id,
            photo,
            aliases,
            fullName,
            publisher,
            placeOfBirth,
            race,
            height,
            weight
        );

        expect(hero.id).toBeTypeOf('number');
        expect(hero.photo).toBeTypeOf('object');
        expect(hero.aliases).toBeTypeOf('string');
        expect(hero.fullName).toBeTypeOf('string');
        expect(hero.publisher).toBeTypeOf('string');
        expect(hero.placeOfBirth).toBeTypeOf('string');
        expect(hero.race).toBeTypeOf('string');
        expect(hero.height).toBeTypeOf('object');
        expect(hero.weight).toBeTypeOf('object');

    })
})