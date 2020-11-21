const Strutils = require('./index');

describe('isString', () => {
  test('should return an empty string as true', () => {
    expect(Strutils.isString('')).toBe(true);
  });
  
  test('should return a String object as true', () => {
    expect(Strutils.isString(new String('Hello World'))).toBe(true);
  });
  
  test('should return a string as true', () => {
    expect(Strutils.isString('some word')).toBe(true);
  });
  
  test('should return a template literal as true', () => {
    expect(Strutils.isString(`some word`)).toBe(true);
  });
  
  test('should return an object as false', () => {
    expect(Strutils.isString({someString: 'hello word'})).toBe(false);
  });
  
  test('should return a number as false', () => {
    expect(Strutils.isString(49)).toBe(false);
  });
  
  class Sample {}
  
  test('should return a custom class as false', () => {
    expect(Strutils.isString(new Sample())).toBe(false);
  });
})

describe('toTitleCase', () => {
  test('should title case lowercase words', () => {
    expect(Strutils.toTitleCase('this is all lowercase')).toBe('This Is All Lowercase');
  });
  
  test('should keep uppercase words as uppercase', () => {
    expect(Strutils.toTitleCase('THIS is ALL UPPERCASE')).toBe('THIS Is ALL UPPERCASE');
  });
  
  test('should not fail on non-string objects', () => {
    expect(Strutils.toTitleCase(4)).toBe(4);
  });
  
  test('should not titlecase common words when useRules is set to true', () => {
    expect(Strutils.toTitleCase('we the people are an anomoly', true)).toBe('We the People Are An Anomoly');
  });
  
  test('should not change uppercase words when useRules is set to true', () => {
    expect(Strutils.toTitleCase('we A U', true)).toBe('We A U');
  });
});


describe('removeSpaces', () => {
  test('should remove spaces', () => {
    expect(Strutils.removeSpaces('  this is a sentence')).toBe('thisisasentence');
  });
  
  test('should remove spaces even with punctuation', () => {
    expect(Strutils.removeSpaces('some word-with-a-hyphen  .  ')).toBe('someword-with-a-hyphen.');
  });
  
  test('if there is a carriage return and removeNewLines is false, keep the carriage return', () => {
    expect(Strutils.removeSpaces(`word with \na linebreak`, false)).toBe(`wordwith\nalinebreak`);
  });  
});

