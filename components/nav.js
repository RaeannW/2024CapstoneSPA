import html from "html-literal";
// Example of using a component inside another component
import navItem from "./navItem.js";
import navItemBottom from "./navItemBottom.js";

// constructing an HTML list of items from the array in Store
//  - .map formats the array elements into html
//      and constructs a new array from the results
//  - .join joins the elements of the new array into one long string
//  - data-navigo is a switch that allows Navigo to handle our page routing
export default (state) => {
  return html`
    <nav>
      <i class="fas fa-bars"></i>

      <nav>
        <i class="fas fa-bars"></i>
        <ul class="navMain">
          <li class="hidden--mobile nav-links"></li>
          <li><img id="logo" src="images/planPalLogo.png" /></li>
          ${state.top.map((item) => navItem(item)).join("")}
          <!-- <li class="subNavMain">
    <span class="dot"></span>
    <h3 class="navText">name</h3>
  </li>
  <li class="subNavMain">
    <span class="dot"></span>
    <a href="index.html">
      <h3 class="navText">daily</h3>
    </a>
  </li>
  <li class="subNavMain">
    <span class="dot"></span>
    <h3 class="navText">weekly</h3>
  </li>
  <li class="subNavMain">
    <span class="dot"></span>
    <h3 class="navText">monthly</h3>
  </li> -->
        </ul>
        <hr class="dotted-nav" />
        <ul>
          ${state.bottom.map((item) => navItemBottom(item)).join("")}
          <!-- <li><a href="about.html">
  <h4 class="navTextBottom">about</h4>
</a></li>
<li><a href="contact.html">
  <h4 class="navTextBottom">contact</h4>
</a></li> -->
        </ul>
        <li><h4 class="navTextBottom">follow us:</h4></li>
        <li><img class="socialIcon" src="images/Instagram.svg" /></li>
        <li><img class="socialIcon" src="images/LinkedIn.svg" /></li>
        <li><img class="socialIcon" src="images/GitHub.svg" /></li>
        <li><img class="socialIcon" src="images/Pinterest.svg" /></li>
        <h4 class="navTextBottom">Planpal app © 2024</h4>
      </nav>
    </nav>
  `;
};
