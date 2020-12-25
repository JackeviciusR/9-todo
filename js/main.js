// logikos seka:

// is pat pradziu paleidziame tuscia list'a su init() funkcija,
// kurioje yra updateStyle() funkcija, t.y. paleidzima aplinka, kurioje viskas vyks
// tada:
// paspaude '+' atsidaro langas 'lightbox', nes pridejome klase '.show'
// ka jis toliau darys, priklauso ka pasirinksime,
// jei pasirenkame:
// > cancel - isjungiam, nes pasaliname klase 'show'
// > add - irasome komentara, bet pirma paimame irasyta teksta
//          ir paleidziame funkcija addTask(task), su kuria naudojant '.push()'
//          i atminti idedame teksta (t.y. i taskList = [[...],[...]] ),
//          tada sukuriame per nauja visus list'o elementus (item) su renderList()
//          pagal tai, kiek yra elementu atminties taskList'e.
//
// su ESC galima taip pat panaikinti pildymo forma, vietoj 'cancel' mygtuko
//
// sugeneruotiems komentaru elementu mygtukams (edit, remove)
// priskiriami EventListener'iai, kurie reguos i 'clicka'.
// jie inicijuoja redagavima (initTodoEditing() funkc.) arba trinima (deleteTask() funkc.).
//

//******************************************************************************************

console.log('Labukas 🎅');

//************************************************* */
import { Todo } from "./components/Todo.js";
//************************************************* */

// susirandame '+' vieta - sukurti nauja irasa
const addNewTask = document.querySelector('.add-new');

// atsirandancio lango vieta ir jo strukturos vietos
const lightbox = document.querySelector('.lightbox');
    const form = lightbox.querySelector('form');
        const textarea = form.querySelector('textarea');
        const buttonCancel = form.querySelector('button.cancel');
        const buttonAdd = form.querySelector('button.add');




const todo = new Todo({
    selector: 'main',
});

// inicijuojame aplinka - paleidziame list'o aplinka su '+' mygtuku, viduje patikrina ar selektorius randa tinkama  vieta strukturoje
todo.init();



// ** add events **

// paspaudus prideti - '+', atsidaro lightbox'o langas
addNewTask.addEventListener('click', () => {
    lightbox.classList.add('show');
});


// lightbox'o isjungimo budai
// 1 - lightbox'o formoje paspaudus 'cancel' langas issijungia
buttonCancel.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

// 2 - paspaudus ESC mygtuka, issijungia
// keyup - pilnai atleidus mygtuka
addEventListener('keyup', ({key}) => {
    // jei atleidziamas 'ESC' mygtukas
    if (key === 'Escape') {
        lightbox.classList.remove('show');
    }
});


// irasyto teksto issaugojimas, elemento sukurimas ir teksto atvaizdavimas jame
buttonAdd.addEventListener('click', (e) => {
    // isjungiam default'ini veiksma, kuris bandydamas atlikti veiksma perkraus lightbox, taip prarasime irasa jo dar neisaugoje
    e.preventDefault();

    // kas bus isaugota i atminties 'taskList' viena elementa
    const task = {
        text: textarea.value,
        isCompleted: false,
    };


    todo.addTask(task);
    // po irasymo i atminti ir komentaro elemento sukurimo is lightbox'o panaikiname teksta ir uzdarom
    textarea.value = '';
    lightbox.classList.remove('show');

});









