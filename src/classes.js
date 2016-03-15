class Foo {

}

var bar = new Foo();

class Dog {
  constructor(says) {
    this.says = 'life is ruff'
  }
}
var dog = new Dog;

class Cat {

  constructor(garfield) {
    this.garfield = garfield
    this.growl = function(growl) {
      return 'meow'
    }
  }
}

var garfield = new Cat();

class FacelessMan {
  constructor(name) {
    this.name = name;
  }
}

var aMan = new FacelessMan(`Jaqen H'ghar`);

class Lion extends Cat {
  constructor() {
    super();
    this.size = 'BIG';
  }
}


class KeepSecret {
  constructor() {
    this.squeal = function() {
      return `My class rocks!`
    }
  }
}

class Key {
  constructor() {}
}
class Safe {
  constructor(secret, keyhole) {
    this.unlock = function(attempt) {
      if (attempt === keyhole) {
        return secret;
      }

      return undefined;
    }
  }
}
