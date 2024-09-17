
const buttons = document.querySelectorAll('.button')     //select all button 
const body = document.querySelector('body')              //select body
buttons.forEach(function (button) {                      //selct perticular button from all button
    button.addEventListener('click', (event) => {
        if (event.target.id === 'grey') {
            body.style.backgroundColor = 'grey';   //changing body color to grey  if button is grey
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
        if (event.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        if (event.target.id === 'pink') {
            body.style.backgroundColor = 'pink';
        }
        if (event.target.id === 'black') {
            body.style.backgroundColor = 'black';
        }


    })

})