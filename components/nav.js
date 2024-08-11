import html from "html-literal";
// Example of using a component inside another component
import navItem from "./navItem.js";

// constructing an HTML list of items from the array in Store
//  - .map formats the array elements into html
//      and constructs a new array from the results
//  - .join joins the elements of the new array into one long string
//  - data-navigo is a switch that allows Navigo to handle our page routing
export default navItems => {
  return html`
 <nav>
            <i class="fas fa-bars"></i>
            <div class="hidden--mobile nav-links">
          <img id="logo" src="images/planPalLogo.png">
          <div class="navMain">
            <div class="subNavMain">
              <span class="dot"></span>
              <h3 class="navText">name</h3>
            </div>
            <div class="subNavMain">
              <span class="dot"></span>
              <a href="index.html">
                <h3 class="navText">daily</h3>
              </a>
            </div>
            <div class="subNavMain">
              <span class="dot"></span>
              <h3 class="navText">weekly</h3>
            </div>
            <div class="subNavMain">
              <span class="dot"></span>
              <h3 class="navText">monthly</h3>
            </div>
          </div>
          <hr class="dotted-nav">
          <a href="about.html">
            <h4 class="navTextBottom">about</h4>
          </a>
          <a href="contact.html">
            <h4 class="navTextBottom">contact</h4>
          </a>
          <h4 class="navTextBottom">follow us:</h4>
          <img class="socialIcon" src="images/Instagram.svg">
          <img class="socialIcon" src="images/LinkedIn.svg">
          <img class="socialIcon" src="images/GitHub.svg">
          <img class="socialIcon" src="images/Pinterest.svg">
          <h4 class="navTextBottom">Planpal app © 2024</h4>
      </nav>
  `;
};
