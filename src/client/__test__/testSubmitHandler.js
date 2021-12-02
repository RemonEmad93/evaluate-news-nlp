import "babel-polyfill";

const { handleSubmit } = require('..');

describe("handleSubmit testing ", () => {
    test('submit testing', () => {
        expect(handleSubmit).toBeDefined()
    });
})

