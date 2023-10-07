import {expect} from 'chai';
import {calendar} from '../dist/fn/datetime/calendar.js';

describe('calendar', function() {

    it('Should say today is today', function() {
        const testDate = new Date();

        const result = calendar(testDate);

        // Making a basic assertion, you can make more assertions based on your requirements
        expect(result).to.equal('Today');
        // ... more assertions based on other properties of the expected result
    });

    // Add more tests as needed

});

