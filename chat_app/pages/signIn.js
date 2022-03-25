import {
    InputCommon
} from '../common/inputCommon.js'
import {
    setScreen
} from '../index.js'
import {
    SignUp
} from './signUp.js'
import {
    Chat
} from "./chat.js"
class SignIn {
    container = document.createElement("div")
    title = document.createElement("h1")
    form = document.createElement("form")
    inputEmail = new InputCommon("email", "Enter your email", "inputEmail")
    inputPassword = new InputCommon("password", "Enter your password", "inputPassword")
    inputCheckbox = new InputCommon("checkbox", "inputCheckbox")

    actionContainer = document.createElement("div")
    divLogin = document.createElement("div")
    divImg = document.createElement("div")
    divSocial = document.createElement("div")
    btnSignIn = document.createElement("button")
    btnSignUp = document.createElement("button")


    constructor() {
        this.title.innerHTML = "Login"

        this.container.setAttribute("class", "row")
        this.container.appendChild(this.divImg)

        this.divImg.setAttribute("class", "col-sm-5 divImg")
        this.divImg.innerHTML = `<lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_fw6h59eu.json"  
        background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>`
        this.divImg.appendChild(this.btnSignUp)

        this.container.appendChild(this.divLogin)
        this.divLogin.setAttribute("class", "col-sm-5 divLogin")
        this.divLogin.appendChild(this.form)
        this.divLogin.appendChild(this.title)
        this.title.setAttribute("class", "header")
        this.divLogin.appendChild(this.inputEmail.container)
        this.divLogin.appendChild(this.inputPassword.container)
        this.divLogin.appendChild(this.inputCheckbox.container)


        this.inputEmail.label.children[0].setAttribute("class", "fa fa-user fa-2x")
        this.inputPassword.label.children[0].setAttribute("class", "fa fa-lock fa-2x")
        this.inputCheckbox.label.innerHTML = "Remember me"
        this.inputCheckbox.label.setAttribute("id", "checkbox")

        this.btnSignIn.innerHTML = "Login"
        this.btnSignIn.setAttribute("class", "btn btn-primary ")
        this.btnSignIn.setAttribute("type", "button")
        this.btnSignUp.innerHTML = "Create an account"
        this.btnSignUp.setAttribute("class", "createAcc")
        this.btnSignIn.addEventListener("click", this.handleSignIn)
        this.btnSignUp.addEventListener("click", this.handleRedirectRegister)
        this.divLogin.appendChild(this.btnSignIn)
        this.divLogin.appendChild(this.divSocial)
        this.divSocial.setAttribute("class", "SocialGrp")
        this.divSocial.innerHTML = `<span>Or login with</span> <span class="pr-3"></span><a href="#" class="fa fa-facebook fa-social"></a>
        <span class="pr-3"></span>
        <a href="#" class="fa fa-twitter fa-social"></a>
        <span class="pr-3"></span>
        <a href="#" class="fa fa-google fa-social"></a>`

    }
    handleSignIn = (e) => {
        e.preventDefault()
        const emailValue = this.inputEmail.getValue();
        const passwordValue = this.inputPassword.getValue();

        if (!emailValue) {
            this.inputEmail.setErrorMessage("Email cannot be empty")
        } else {
            this.inputEmail.setErrorMessage("")
        }
        firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
            .then((userCredential) => {
                // Signed in

                var user = userCredential.user;
                console.log(`Sign in`);
                console.dir(db.collection("users"))
                location.replace("../chatUi/index.html")
                db.collection("users").onSnapshot((snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                      if (change.type === "added") {
                        if(firebase.auth().currentUser.email == change.doc.data().email){
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `Hi ${change.doc.data().name}`,
                                showConfirmButton: false,
                                timer: 1000
                            })
                        }
                      }

                      if (change.type === "modified") {
                  
                      }
                      if (change.type === "removed") {
                       
                      }
                    });
                  });
       
                

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                if(errorCode === "auth/wrong-password"){
                    this.inputPassword.setErrorMessage("Wrong Password")
                }
                console.log(errorCode);
            });

    }

    handleRedirectRegister = (e) => {
        e.preventDefault()
        const registerScreen = new SignUp()
        setScreen(registerScreen.container)
    }
}

export {
    SignIn
}