import {expect, should} from 'chai';
import {analyzeFunction} from '../dist/fn/misc/analyzeFunction.js';


describe(`Misc. Functions`, () => {
    describe('analyzeFunction', function() {

        it('Should analyze a function with a name correctly', function() {
            const testFunction = `
                function named() {};
            `;

            const result = analyzeFunction(testFunction);

            expect(result.name).to.equal('named');
        });
        it('Should analyze an anonymous function correctly', function() {
            const testFunction = `
                function(a, b) {return a + b};
            `;

            const result = analyzeFunction(testFunction);

            expect(result.name).to.equal('');
            expect(result.args[1]?.name).to.equal('b');
        });

        it('Should analyze a nested function correctly', function() {
            const testFunction = `
                function outer() {
                    return function inner() {};
                }
            `;

            const result = analyzeFunction(testFunction);

            expect(result.name).to.equal('outer');
        });
        it("Should understand a function with destructured parameters", function() {
            const testFunction = `
                function withDestructuring({ a, b }) {
                    return a + b;
                }
            `;

            const result = analyzeFunction(testFunction);

            expect(result.argString).to.equal('{ a, b }');
        });
        it("Should understand a function with default parameters", function() {
            const testFunction = `
                function withDefaults(a = 1, b = 2) {
                    return a + b;
                }
            `;

            const result = analyzeFunction(testFunction);

            expect(result.args[0]?.default).to.equal('1');
            expect(result.args[1]?.default).to.equal('2');
            expect(result.argString).to.equal('a = 1, b = 2');
        });
        it("Should understand a function with spread operators", function() {
            const testFunction = `
                function withRest(...args) {
                    return args;
                }
            `;

            const result = analyzeFunction(testFunction);

            //expect(result.args[0]?.rest).to.be.true;
            expect(result.argString).to.equal('...args');
        });
        it("should understand a function with a return type", function() {
            const testFunction = `
                function withReturnType(): string {
                    return 'hello';
                }
            `;

            const result = analyzeFunction(testFunction);

            expect(result.returnType).to.equal('string');
        });
        it("should understand a function with a return type and a generic", function() {
            const testFunction = `
                function withReturnType<T>(): T {
                    return 'hello';
                }
            `;

            const result = analyzeFunction(testFunction);

            expect(result.returnType).to.equal('T');
        });
        it("should understand a function with a comment inside its signature", function() {
          const testFunction = `
          function withComments(a, /* comment */ b) {
              return a + b;
          }
          `;

          const result = analyzeFunction(testFunction);

          expect(result.args[1].name).to.equal('b');
        });
        it("should understand an alias function", function() {
          const testFn = (a, b) => a + b;
          const testFunction = testFn;

          const result = analyzeFunction(testFunction);

          expect(result.args[1].name).to.equal('b');
        });

    });

});

