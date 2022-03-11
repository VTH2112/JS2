import { SignIn } from './signIn.js'

const main = document.querySelector("#main")
main.setAttribute("class","container")

const setScreen = (container) => {
    main.innerHTML = ""
    main.appendChild(container)
}
const loginScreen = new SignIn();
setScreen(loginScreen.container)

export { setScreen }

