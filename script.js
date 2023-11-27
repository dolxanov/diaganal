

function enter() {
    let eInput = document.getElementById('email');
    let pInput = document.getElementById('password');
    let email = 'admin@gmail.com'
    let password = 123456;
    let weak = document.getElementById('weak');
    let normal = document.getElementById('normal');
    let strong = document.getElementById('strong');

 

    if (pInput.value.length == 6) {
        normal.style.display = 'flex'
        strong.style.display = 'none'
        weak.style.display = 'none'
        normal.style.color = 'blue'
        

        
    }
    else if(pInput.value.length < 6){
        weak.style.display = 'flex'
        normal.style.display = 'none'
        strong.style.display = 'none'
        weak.style.color = 'red'

    }
    else {
        strong.style.display = 'flex'
        weak.style.display = 'none'
        normal.style.display = 'none'
        strong.style.color = 'green'
    }


    if(eInput.value == email && pInput.value == password){
        alert('welcome');


    }

    else{
        alert('Yanlish')
    }
}

function change() {
    let password = document.getElementById('password');
    let showHide = document.getElementById('showHide');
    // console.log(showHide)



    if (password.type === 'password') {
        password.type = 'text'
        showHide.className = 'fa-regular fa-eye'


    }
    else {
        password.type = 'password'
        showHide.className = 'fa-regular fa-eye-slash'




    }
}







