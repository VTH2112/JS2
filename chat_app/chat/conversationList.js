import { CreateConversationForm } from "./createConversationForm.js";

class ConversationList {
  container = document.createElement("div");
  btnCreateConversation = document.createElement("button");
  btnSignOut = document.createElement("button");
  createConversationForm = new CreateConversationForm();


  constructor() {
    this.btnCreateConversation.innerHTML = "+ Create Conversation";
    this.btnSignOut.innerHTML = "Sign Out";
    this.btnCreateConversation.addEventListener("click", this.handleVisible);

    this.btnSignOut.addEventListener("click", this.handleSignOut);
    this.btnSignOut.setAttribute("class", "btn btn-primary ")
    this.btnCreateConversation.setAttribute("class", "btn btn-primary mr-3")
    this.btnCreateConversation.setAttribute("data-toggle", "modal")
    this.btnCreateConversation.setAttribute("data-target", "#modalCenter")
    

    this.container.appendChild(this.btnCreateConversation);
    this.container.appendChild(this.btnSignOut)
    this.container.appendChild(this.createConversationForm.container);
  }

  handleSignOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logout Success',
            showConfirmButton: false,
            timer: 1500
          })
      }).catch((error) => {
        // An error happened.
      });
  }

  handleVisible = () => {
    this.createConversationForm.setVisible(true)

  };
  
}

export { ConversationList };
