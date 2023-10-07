import {expect} from 'chai';
import {} from '../node_modules/dayjs/dayjs.min.js';
import {dateSQL} from '../dist/fn/datetime/dateSQL.js';

describe('dateSQL', function() {

    it('Should analyze a nested function correctly', function() {
        const testDate = new Date();

        const result = dateSQL(testDate);

        // Making a basic assertion, you can make more assertions based on your requirements
        expect(result).to.equal('outer');
        // ... more assertions based on other properties of the expected result
    });

    // Add more tests as needed

});

