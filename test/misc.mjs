import {expect} from 'chai';
import {analyzeFunction} from '../dist/fn/misc/analyzeFunction.js';


describe(`Misc. Functions`, () => {
    describe('analyzeFunction', function() {

        it('Should analyze a nested function correctly', function() {
            const testFunction = `
                function outer() {
                    return function inner() {};
                }
            `;

            const result = analyzeFunction(testFunction);

            // Making a basic assertion, you can make more assertions based on your requirements
            expect(result.name).to.equal('outer');
            // ... more assertions based on other properties of the expected result
        });
        it('Should analyze a function with a name correctly', function() {
            const testFunction = `
                function named() {};
            `;

            const result = analyzeFunction(testFunction);

            // Making a basic assertion, you can make more assertions based on your requirements
            expect(result.name).to.equal('named');
            // ... more assertions based on other properties of the expected result
        });
        it("Should understand a function with destructured parameters", function() {
            const testFunction = `
                function withDestructuring({ a, b }) {
                    return a + b;
                }
            `;

            const result = analyzeFunction(testFunction);

            // Making a basic assertion, you can make more assertions based on your requirements
            //expect(result.name).to.equal('withDestructuring');
            expect(result.argString).to.equal('{ a, b }');
            // ... more assertions based on other properties of the expected result
        });
        it("Should understand a function with default parameters", function() {
            const testFunction = `
                function withDefaults(a = 1, b = 2) {
                    return a + b;
                }
            `;

            const result = analyzeFunction(testFunction);

            // Making a basic assertion, you can make more assertions based on your requirements
            expect(result.args[0]?.default).to.equal('1');
            expect(result.args[1]?.default).to.equal('2');
            expect(result.argString).to.equal('a = 1, b = 2');
            // ... more assertions based on other properties of the expected result
        });

    // Add more tests as needed
    });

});

