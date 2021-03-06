/*
 Jasmine Expectation Matchers 101

 Jasmine Homepage: http://pivotal.github.io/jasmine/
*/


/**
 * Jasmine has several built-in matchers.  Here are a few:
 */

expect(x).toEqual(y);   // compares objects or primitives `x` and `y` and
                        // passes if they are equivalent

expect(x).toBe(y);      // compares objects or primitives `x` and `y` and
                        // passes if they are the same object

expect(x).toMatch(pattern); // compares `x` to string or regular expression
                            // `pattern` and passes if they match

expect(x).toBeDefined();    // passes if `x` is not `undefined`

expect(x).toBeUndefined();  // passes if `x` is `undefined`

expect(x).toBeNull();       // passes if `x` is `null`

expect(x).toBeTruthy();     // passes if `x` evaluates to true

expect(x).toBeFalsy();      // passes if `x` evaluates to false

expect(x).toContain(y);     // passes if array or string `x` contains `y`

expect(x).toBeLessThan(y);  // passes if `x` is less than `y`

expect(x).toBeGreaterThan(y);   //  passes if `x` is greater than `y`

expect(function(){      // passes if function `fn` throws exception `e`
    fn();               //  when executed
}).toThrow(e);


/**
 * Every matcher's criteria can be inverted by prepending `.not`:
 */

expect(x).not.toEqual(y);   // compares objects or primitives `x` and `y` and
                            // passes if they are *not* equivalent

