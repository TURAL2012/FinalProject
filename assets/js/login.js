
const form = document.querySelector('form')
const passInput = document.querySelector('#pass')
const userNameInput = document.querySelector('#userName')


const user = {
    userName: 'Tural',
    passWord: "Tural123"
}

const Login = (e) => {
    e.preventDefault()
    passInput.value === ''
    userNameInput.value === ''
    if (passInput.value === '' | userNameInput.value === '') {
        Toastify({
            text: "Error ",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            }, // Callback after click
        }).showToast();
        passInput.value === ''
        userNameInput.value === ''
    }
    else if (userNameInput.value === user.userName && passInput.value === user.passWord) {
        Toastify({
            text: `Hello Tural`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }, // Callback after click
        }).showToast();
    }
    else{
        Toastify({
            text: `Something went wrong`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            }, // Callback after click
        }).showToast();
    }
}

form.addEventListener('submit', Login)
