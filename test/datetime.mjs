import {expect} from 'chai';
import {dateSQL} from '../dist/fn/datetime/dateSQL.js';
import {calendar} from '../dist/fn/datetime/calendar.js';

describe(`Datetime`, () => {
    describe('dateSQL', function() {

        it('Should return a SQL formatted date correctly', function() {
            const testDate = new Date(2022, 8, 15, 22, 30, 0);

            const result = dateSQL(testDate);

            // Making a basic assertion, you can make more assertions based on your requirements
            expect(result).to.equal('2022-09-15 22:30:00');
            // ... more assertions based on other properties of the expected result
        });

        // Add more tests as needed

    });
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
    
});
