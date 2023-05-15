function Test() {
  function CreateWarrior() {
    var c1 = new Warrior();
    c1.useWeapon();
  }

  function CreateArcher() {
    var c2 = new Archer();
    c2.useWeapon();
  }

  function CreateMagician() {
    var c3 = new Magician();
    c3.useWeapon();
  }

  CreateWarrior();
  CreateArcher();
  CreateMagician();
  dungeon = new Dungeon();
  dungeon.SetDifficulty(new Normal());
  dungeon.CreateDungeon();
  dungeon.SetDifficulty(new Hard());
  dungeon.CreateDungeon();
}

/* Decorator Pattern 을 이용하여 Character의 useWeapon 기능을
상속받은 객체마다 다른 weapon을 사용할 수 있도록 확장 */

function Character() {}
Character.prototype.useWeapon = function() {
  weapon.use();
}

function Warrior() {
  weapon = new UseSword();
}

Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;

function Archer() {
  weapon = new UseBow();
}

Archer.prototype = Object.create(Character.prototype);
Archer.prototype.constructor = Archer;

function Magician() {
  weapon = new UseStaff();
}

Magician.prototype = Object.create(Character.prototype);
Magician.prototype.constructor = Magician;

/* Command Pattern을 이용하여 weapon.use()의 동작을 직업에 맞게
UseSword, UseBow, UseStaff 중에 원하는 명령으로 설정*/ 

function slash() {
  console.log("slash 공격");
}

function shoot() {
  console.log("shoot 공격");
}

function magic() {
  console.log("magic 공격");
}

function UseSword() {}
UseSword.prototype.use = function() {
  slash();
}

function UseBow() {}
UseBow.prototype.use = function() {
  shoot();
}

function UseStaff() {}
UseStaff.prototype.use = function() {
  magic();
}

// Strategy pattern을 이용하여 던전의 난이도 선택 가능

function Difficulty() {}
Difficulty.prototype.build = function() {}

function Normal() {}
Normal.prototype.build = function() {
  console.log("Normal 던전 생성");
}

function Hard() {}
Hard.prototype.build = function() {
  console.log("Hard 던전 생성");
}

function Dungeon() {}
Dungeon.prototype.SetDifficulty = function(difficulty) {
  this.difficulty = difficulty
}
Dungeon.prototype.CreateDungeon = function() {
  this.difficulty.build();
}

Test();