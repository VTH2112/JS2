import { ConversationList } from "../chat/conversationList.js";



class Chat {
  container = document.createElement("div");
  btnLogout = document.createElement("button");

  conversationList = new ConversationList();

  constructor() {
    this.container.appendChild(this.conversationList.container);
    this.subscribeConversation()
    // this.container.innerHTML = "Chat";

    // this.btnLogout.innerHTML = "Log out";
    this.btnLogout.addEventListener("click", this.handleLogout);

    // this.container.appendChild(this.btnLogout);
  }
    subscribeConversation = () => {
      db.collection("conversations").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            console.log("new conversation: ", change.doc.data());
          }
          if (change.type === "modified") {
            console.log("Modified conversation: ", change.doc.data());
          }
          if (change.type === "removed") {
            console.log("Removed conversation: ", change.doc.data());
          }
        });
      });
    }

  handleLogout = (e) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
}

export { Chat };
