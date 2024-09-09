import html from "html-literal";
// Example of using a component inside another component
import navItem from "./navItem.js";
import logo from "../assets/img/planPalLogo.png";
import instagram from "../assets/img/Instagram.svg";
import linkedin from "../assets/img/LinkedIn.svg";
import github from "../assets/img/GitHub.svg";
import pin from "../assets/img/Pinterest.svg";

// constructing an HTML list of items from the array in Store
//  - .map formats the array elements into html
//      and constructs a new array from the results
//  - .join joins the elements of the new array into one long string
//  - data-navigo is a switch that allows Navigo to handle our page routing
export default state => {
  return html`
    <i class="fas fa-bars"></i>
    <nav>
      <ul class="navMain">
        <li class="hidden--mobile nav-links"></li>
        <li><img id="logo" src="${logo}" /></li>
        ${state.top.map(item => navItem(item)).join("")}
      </ul>
      <hr class="dotted-nav" />
      <div class="socialIconRow">
        <li><h4 class="navTextBottom">follow us:</h4></li>
        <li>
          <a href="https://www.instagram.com/raedoesdoodles/" target="_blank"
            ><img class="socialIcon" src="${instagram}"
          /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rae-wiechens-12113615b/"
            target="_blank"
            ><img class="socialIcon" src="${linkedin}"
          /></a>
        </li>
        <li>
          <a href="https://github.com/RaeannW" target="_blank"
            ><img class="socialIcon" src="${github}"
          /></a>
        </li>
        <li>
          <a href="https://www.pinterest.com/raedoesdoodles/" target="_blank"
            ><img class="socialIcon" src="${pin}"
          /></a>
        </li>
      </div>
      <h4 class="navTextBottom">Planpal app © 2024</h4>
    </nav>
  `;
};
