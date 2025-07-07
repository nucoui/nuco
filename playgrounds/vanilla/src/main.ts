import "./style.css";
import "@nuco/variable/css"

import { CustomElements } from"@nuco/core/elements/customElements";

if(!customElements.get("n-button")) {
  customElements.define("n-button", CustomElements["n-button"]);
}

if (!customElements.get("n-input")) {
  customElements.define("n-input", class extends CustomElements["n-input"] {
    static formAssociated = true;
  });
}

const nInput = document.createElement("n-input");
const nButton = document.createElement("n-button");
const form = document.createElement("form");

document.querySelector("#app")?.appendChild(form);

form.appendChild(nInput);
form.appendChild(nButton);

form.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = formData.get("name")?.toString();

  console.log("Form submitted", data);
};

nInput.setAttribute("name", "name");
nInput.setAttribute("type", "text");
nInput.setAttribute("maxlength", "20");

nButton.setAttribute("variant", "secondary");
nButton.setAttribute("size", "medium");
nButton.setAttribute("width", "auto");
nButton.setAttribute("type", "submit");
nButton.textContent = "Click Me";
// nButton.addEventListener("on-click", (e) => {
  //   console.log("Button clicked", e);
  // });
