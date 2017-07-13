'use strict';

describe('', () => {
    it('where there is no rule should print text', () => {
        const inputs = 1;
        const fizz=3;
        const bizz=5;
        const whizz=7;
        spyOn(console, 'log');
        fizzBizzWhizz(inputs,fizz,bizz,whizz);
        const result = 1;
        expect(console.log).toHaveBeenCalledWith(result);
    });
//test1
    it('when it can be 3 or 5 or 7% should print text', () => {
        const inputs = 6;
        const fizz=3;
        const bizz=5;
        const whizz=7;
        spyOn(console, 'log');
        fizzBizzWhizz(inputs,fizz,bizz,whizz);
        const result = 'fizz';
        expect(console.log).toHaveBeenCalledWith(result);
    });
//test2
    it('when it can be 3 and 5 % should print text', () => {
        const inputs = 15;
        const fizz=3;
        const bizz=5;
        const whizz=7;
        spyOn(console, 'log');
        fizzBizzWhizz(inputs,fizz,bizz,whizz);
        const result = 'fizzbizz';
        expect(console.log).toHaveBeenCalledWith(result);
    });
//test3
    it('when it can be 3 and 7 % should print text', () => {
        const inputs = 21;
        const fizz=3;
        const bizz=5;
        const whizz=7;
        spyOn(console, 'log');
        fizzBizzWhizz(inputs,fizz,bizz,whizz);
        const result = 'fizzwhizz';
        expect(console.log).toHaveBeenCalledWith(result);
    });
//test4
    it('when it can be 5 and 7 % should print text', () => {
        const inputs = 70;
        const fizz=3;
        const bizz=5;
        const whizz=7;
        spyOn(console, 'log');
        fizzBizzWhizz(inputs,fizz,bizz,whizz);
        const result = 'bizzwhizz';
        expect(console.log).toHaveBeenCalledWith(result);
    });
//test5
    it('when it can be 3 and 5 and 7 % should print text', () => {
        const inputs = 105;
        const fizz=3;
        const bizz=5;
        const whizz=7;
        spyOn(console, 'log');
        fizzBizzWhizz(inputs,fizz,bizz,whizz);
        const result = 'fizzbizzwhizz';
        expect(console.log).toHaveBeenCalledWith(result);
    });
//test6
    it('when it contain 3 should print text', () => {
        const inputs = 13;
        const fizz=3;
        const bizz=5;
        const whizz=7;
        spyOn(console, 'log');
        fizzBizzWhizz(inputs,fizz,bizz,whizz);
        const result = 'fizz';
        expect(console.log).toHaveBeenCalledWith(result);
    });
});//test7

