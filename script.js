
const drumButtons = document.querySelectorAll(".drum")
console.log(drumButtons)

for (let btn of drumButtons) {

    // добивить слушатель событий
    btn.addEventListener("click", function (event) {

        console.log(event.target.innerText)
        console.log(event)
        makeSound(event.target.innerText)

    })
}


function makeSound(key) {



    if (key === 'w') {       
        // вызываем звук
        new Audio('sounds/tom-1.mp3').play()
        // выход из функции
        return
    }


    if (key=='a') {
            new Audio('sounds/tom-2.mp3').play()
            return
    }


    if (key=='s') {
        new Audio('sounds/tom-3.mp3').play()
        return
    }


    if (key=='d') {
        new Audio('sounds/tom-2.mp3').play()
        return
    }

    if (key=='j') {
        new Audio('sounds/snare (1).mp3').play()
        return
    }

    if (key=='k') {
        new Audio('sounds/crash (1).mp3').play()
        return
    }


    if (key=='l') {
        new Audio('sounds/kick-bass (1).mp3').play()
        return
    }


}


// добавляем вызов звука с клавиатуры

document.addEventListener("keydown",function (event){
 console.log(event);
makeSound(event.key);


})














































