var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { getCharacters } from "./services/charactes.js";
class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    return __awaiter(this, void 0, void 0, function* () {
      const character = yield getCharacters();
      this.render(character);
    });
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
            
            <link rel="stylesheet" href="./style.css">
            const personajes = charactes.map(({ gender, id, image, name, species, type }) => <article>
            <h3>${gender}: ${id}: ${name}: ${species}: ${type}:  <h3>
            <img src="${image}">
            
            </article>);
            this.shadowRoot.innerHTML = <section>
            ${personajes.join("")}
            </section>
            `;
    }
  }
}

customElements.define("app-container", AppContainer);
