

class Todo {
    constructor(params) {
        this.selector = params.selector;

        this.DOM = null;

        // atminties vieta
        // kiekvienas komentaras saugomas kaip vienas elementas array'ejuje, kai paspaudziame 'add'
        this.taskList = [];
    }


init() {
    if(!this.isSelectorValid()) {
        console.log('return false');
        return false;
    }

    this.updateStyle();
    // render
    // add events
}


isSelectorValid() {
    const DOM = document.querySelector(this.selector);
    console.log(`DOM: ${DOM}`);

    if (!DOM) {
        return false;
    }

    this.DOM = DOM;
    return true;
}


updateStyle() {
    console.log(this.DOM);
    // tikriname ar turi klase, jei ne - priskiriame
    if(!this.DOM.classList.contains('list')) {
        this.DOM.classList.add('list');
    }
}


// CRUD - create, read, update, delete


// CRUD: create

addTask(task) {
    // nauja irasa ikeliame i atminti
    this.taskList.push(task);

    // irasui sukuriame elementa ir ten ji ikeliame
    // elementai visi per nauja yra perrasomi is atminties ir vel ikeliami
    this.renderList();

    return true;
}


generateItem(task) {
    // sugeneruojame item'o dali ir irasome is atminties teksta
    const HTML = `<div class="item">
        <p>${task.text}</p>
        <div class="actions">
            <div class="btn small edit">Edit</div>
            <div class="btn small remove">Remove</div>
        </div>
    </div>`

    return HTML;
}



// CRUD: read
renderList() {
    // nuskaitome per nauja atminti ir jiems kuriame elementus

    let HTML = '';
    // pereiname per visus atminties elementus
    for (let item of this.taskList) {
        HTML += this.generateItem(item);
    }

    this.DOM.innerHTML = HTML;

    // igaliname elementu mygtukus ir ju funkcijas
    this.addEvents();
}


// CRUD: update

// CRUD: delete

// triname elementa pagal indeksa atmintyje
deleteTask(taskIndex) {
    console.log(`triname...ind: ${taskIndex}`);
    console.log(`pries: ${this.taskList}`);

    this.taskList = this.taskList.filter((item, index) => {
        // paliekame tik tuos elementus, kuriu indeksas nesutampa su trinamu indeksu
        console.log(`vidiniai indeksai: ${index}`);
        return index !== taskIndex;
    });
    console.log(`pro: ${this.taskList}`);

    // istryne elementa visus likusios perbaizome per nauja
    this.renderList();
}



//-------------------------------------------------
// Visu elementu 'edit' ir 'remove' mygtukams
// priskiriami EventListener'is, kad reuotu i paspaudima
addEvents() {
    console.log('paleidziame addEvents...');
    // item'u elementu adresai isrenkami
    const items = this.DOM.querySelectorAll('.item');

    // pereiname per kiekviena elementa ir
    //priskiriame EventListener'i ir funkcija
    for (let i=0; i < items.length; i++) {
        const item = items[i];

        console.log(`esu cikle ${i}`);
        const editBtn = item.querySelector('.btn.edit');
        const removeBtn = item.querySelector('.btn.remove');

        editBtn.addEventListener('click', () => {
            // paleidziam redagavima
            this.initTodoItemEditing(item);
        });

        removeBtn.addEventListener('click', () => {
            console.log('inicijuojamas remove mygtukas ....');
            // istriname elementa pagal indeksa
            this.deleteTask(i);
        });

    }

}


// kas vyksta paspaudus redaguoti ('edit')
initTodoItemEditing(itemDOM) {
    console.log('Inicijuojamas TODO redagavimas....');
};


}

export { Todo }

