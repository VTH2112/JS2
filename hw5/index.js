import { SignIn } from './pages/signIn.js'
import { SignUp } from './pages/signUp.js'
import { Chat } from "./pages/chat.js";

const main = document.querySelector("#main")
main.setAttribute("class","container")

const setScreen = (container) => {
    main.innerHTML = ""
    main.appendChild(container)
}
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;

    const chat = new Chat();
    setScreen(chat.container);
  } else {
    
    const loginScreen = new SignIn();
    setScreen(loginScreen.container)
  }
});




export { setScreen }

