import { checkForName } from '../js/URLChecker'

describe("URLChecker", () => {
    test('Invalid URL', () => {
        expect(checkForName('hppp://domainname:5000')).toBe(false);
    });

    test('Valid URL', () => {
        expect(checkForName('https://en.wikipedia.org/wiki/Network')).toBe(true);
    });
})