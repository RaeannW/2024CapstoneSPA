import html from "html-literal";

export default (item) => {
  return html`
    <li class="subNavMain">
      <span class="dot"></span>
      <a href="${item.url}" data-navigo>
        <h3 class="navText">${item.text}</h3>
      </a>
    </li>
  `;
};
