const expect = require('chai').expect;
const Strutils = require('./index');

describe('isString', function(){
  it('should return an empty string as true', function(){
    expect(Strutils.isString('')).to.equal(true);
  });

  it('should return a String object as true', function(){
    expect(Strutils.isString(new String('Hello World'))).to.equal(true);
  });

  it('should return a string as true', function(){
    expect(Strutils.isString('some word')).to.equal(true);
  });

  it('should return a template literal as true', function(){
    expect(Strutils.isString(`some word`)).to.equal(true);
  });

  it('should return an object as false', function(){
    expect(Strutils.isString({someString: 'hello word'})).to.equal(false);
  });

  it('should return a number as false', function(){
    expect(Strutils.isString(49)).to.equal(false);
  });

  class Sample {}

  it('should return a custom class as false', function(){
    expect(Strutils.isString(new Sample())).to.equal(false);
  });

});

describe('titleCase', function(){
  it('should title case lowercase words', function(){
    expect(Strutils.toTitleCase('this is all lowercase')).to.equal('This Is All Lowercase');
  });

  it('should keep uppercase words as uppercase', function(){
    expect(Strutils.toTitleCase('THIS is ALL UPPERCASE')).to.equal('THIS Is ALL UPPERCASE');
  });

  it('should not fail on non-string objects', function(){
    expect(Strutils.toTitleCase(4)).to.equal(4);
  });

  it('should not titlecase common words when useRules is set to true', function(){
    expect(Strutils.toTitleCase('we the people are an anomoly', true)).to.equal('We the People Are An Anomoly');
  });

  it('should not change uppercase words when useRules is set to true', function(){
    expect(Strutils.toTitleCase('we A U', true)).to.equal('We A U');
  });

});

describe('removeSpaces', function(){
  it('should remove spaces', function(){
    expect(Strutils.removeSpaces('  this is a sentence')).to.equal('thisisasentence');
  });

  it('should remove spaces even with punctuation', function(){
    expect(Strutils.removeSpaces('some word-with-a-hyphen  .  ')).to.equal('someword-with-a-hyphen.');
  });

  it('if there is a carriage return and removeNewLines is false, keep the carriage return', function(){
    expect(Strutils.removeSpaces(`word with \na linebreak`, false)).to.equal(`wordwith\nalinebreak`);
  });
});

