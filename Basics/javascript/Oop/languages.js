class Language{
    constructor(name){
        this.name = name
    }

    display(){
        console.log(`Language is ${this.name}`);
    }
}

class HumanLanguage extends Language{
    // Chile classe template
}
class MachineLanguage extends Language{
    // Chile classe template
    constructor(name,roadmap){
        super(name)
        this.roadmap = roadmap
    }

    display(){
        console.log(`Language is ${this.name} - Roadmap is ${this.roadmap}`);
    }
}

let english = new HumanLanguage('english')
console.log(english.display());
let javascript = new MachineLanguage('Javascript', "Front-End")
javascript.display()
let python = new MachineLanguage('Python', 'Back-End')
python.display()
let lang = new Language('rif')
lang.display()
