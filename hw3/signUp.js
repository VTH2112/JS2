import { InputCommon } from './common/InputCommon.js'
import { setScreen } from './index.js'
import { SignIn } from './signIn.js'

class SignUp {
    container = document.createElement("div")
    title = document.createElement("h1")

    divSignUp = document.createElement("div")
    divImgSignUp = document.createElement("div")

    form = document.createElement("form")
    inputName = new InputCommon("text", "Enter your Name", "inputName")
    inputEmail = new InputCommon("email", "Enter your email", "inputEmail")
    inputPassword = new InputCommon( "password", "Enter your password", "inputPassword")
    inputConfirmPassword = new InputCommon( "password", "Enter your confirm password", "inputConfirmPassword")
    inputCheckbox = new InputCommon("checkbox","inputCheckbox")

    actionContainer = document.createElement("div")
    btnSignIn = document.createElement("button")
    btnSignUp = document.createElement("button")

    constructor() {
        this.title.innerHTML = "Register"
        this.container.setAttribute("class", "row")


        this.container.appendChild(this.divSignUp)
        this.divSignUp.setAttribute("class", "col-sm-5 divLogin")
        this.divSignUp.appendChild(this.form)
        this.divSignUp.appendChild(this.title)
        this.divSignUp.appendChild(this.inputName.container)
        this.divSignUp.appendChild(this.inputEmail.container)
        this.divSignUp.appendChild(this.inputPassword.container)
        this.divSignUp.appendChild(this.inputConfirmPassword.container)
        this.divSignUp.appendChild(this.inputCheckbox.container)
        

        this.container.appendChild(this.divImgSignUp)

        this.divImgSignUp.setAttribute("class", "col-sm-5 divImg")
        this.divImgSignUp.innerHTML = `<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_rpsybtsb.json"  
        background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>`
        this.divImgSignUp.appendChild(this.btnSignIn)
        this.btnSignIn.setAttribute("class", "createAcc")

        
        this.inputName.label.children[0].setAttribute("class", "fa fa-user fa-2x")
        this.inputEmail.label.children[0].setAttribute("class", "fa fa-envelope-o fa-2x")
        this.inputPassword.label.children[0].setAttribute("class", "fa fa-lock fa-2x")
        this.inputConfirmPassword.label.children[0].setAttribute("class", "fa fa-unlock-alt fa-2x")
        this.inputCheckbox.label.innerHTML = `I agree all statements in <span style ="text-decoration: underline; cursor: pointer">Terms of service</span>`
        this.inputCheckbox.label.setAttribute("id","checkbox")


        this.btnSignIn.innerHTML = "I am already member"
        this.btnSignUp.innerHTML = "Register"
        this.btnSignUp.setAttribute("class", "btn btn-primary ")
        this.btnSignIn.addEventListener("click", (e) => {
            e.preventDefault()
            const loginScreen = new SignIn()
            setScreen(loginScreen.container)
        })
        this.btnSignUp.addEventListener("click", (e) => {
            e.preventDefault()
            const emailValue = this.inputEmail.getValue();
            const passwordValue = this.inputPassword.getValue();
            const nameValue = this.inputName.getValue();

            if ( !nameValue) {
                this.inputName.setErrorMessage("Name cannot be empty")
            }else if(!emailValue){
                this.inputEmail.setErrorMessage("Email cannot be empty")
            }else if(!passwordValue){
                this.inputPassword.setErrorMessage("Password cannot be empty")
            }else {
                this.inputName.setErrorMessage("")
                this.inputEmail.setErrorMessage("")
                this.inputPassword.setErrorMessage("")
            }
        })

        // this.divSignUp.appendChild(this.btnSignIn)
        this.divSignUp.appendChild(this.btnSignUp)
    }
}

export { SignUp }