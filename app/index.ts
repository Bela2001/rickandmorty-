import { getCharacters } from "./services/charactes.js";
import { Character } from "./types/index.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const character = await getCharacters();
    this.render(character);
  }

  render(charactes: Array<Character>) {
    if (!this.shadowRoot) return;

    const personajes = charactes.map(
      ({ gender, id, image, name, species, type }) => `<article>
    <h3>${gender}: ${id}: ${name}: ${species}: ${type}:  <h3>
    <img src="${image}">

    </article>`
    );

    this.shadowRoot.innerHTML = `<section>
        ${personajes.join("")}
        </section>`;
  }
}

customElements.define("app-container", AppContainer);
