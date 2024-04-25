var makeVisible = document.querySelector('#makeVisible')
var makeInvisible = document.querySelector('#makeInvisible')

makeVisible.addEventListener('click', ()=>{
    var password = document.querySelector('#password');
    if(password.type === "password") {
        password.type = "text";
        makeVisible.classList.add('hidden');
        makeInvisible.classList.remove('hidden');
    }
})

makeInvisible.addEventListener('click', ()=>{
    var password = document.querySelector('#password');
    if(password.type === "text") {
        password.type = "password";
        makeVisible.classList.remove('hidden');
        makeInvisible.classList.add('hidden');
    }
})