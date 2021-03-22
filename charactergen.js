const character = class {
    constructor ( ) {
        const names = ["Tropos", "Merk", "Elizbath", "Cornelius", "Zorg", "Phineas", "Neghet", "Cara", "Bon"];
        const surnames = ["Tarak", "Tarth", "Barnsley", "Nobel", "Wildheart", "Fynntooth", "Fischer"];
        const occupations = ["Mage", "Rogue", "Pirate", "Warrior", "Monk", "Explorer"];
        const skills = ["Intellect", "Power", "Melee", "Healing", "Agility", "Support", "Strategy", "Speed", "Magic"];

        this.name = names[Math.floor(Math.random() * names.length)];
    
        this.surname = surnames[Math.floor(Math.random() * surnames.length)];
    
        this.occupation = occupations[Math.floor(Math.random() * occupations.length)];
    
        this.skill = skills[Math.floor(Math.random() * skills.length)];
    
        this.level = Math.floor(Math.random() * 100);

    }
};

var createMessage = () => {
    /*Extra ToDo's: 
        - add console.log output
        - add styling to consol.log output w/ %c Deliiters
        - add html/css/markdown front end
    */
    var myCharacter = new character();

    let myName = `\n Name: \t ${myCharacter.name} ${myCharacter.surname}`
    let myOccupation = `\n Occupation: \t ${myCharacter.occupation}`
    let mySkill = `\n Skill: \t ${myCharacter.skill} `
    let myLevel = `\n Level: \t ${myCharacter.level} `
    let finalString = myName + myOccupation + mySkill + myLevel;

    return finalString;
};

console.log(`${createMessage()}`);