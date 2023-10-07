import {expect} from 'chai';
import {analyzeFunction} from '../dist/fn/misc/analyzeFunction.js';


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

    // Add more tests as needed

});

