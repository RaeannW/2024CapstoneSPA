import html from "html-literal";
import { profile } from "../store";

export default () => {
  const name = profile.username;
  return html`
    <h2 class="regText"><span class="greetingText">hello:</span> ${name}</h2>
  `;
};
