import html from "html-literal";
import {header, heartStarCircle} from "../components";

export default (state) => html`
  <section>
    <div class="row">
      <div class="side">
        ${header(state)}
        <hr class="dotted" />
      </div>
      <div class="contentTwo">
        ${heartStarCircle()}
      </div>
    </div>
    <div class="rowAbout">
      <div class="about">
        <h3 class="headingOne">Heading Two</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
          commodo viverra maecenas accumsan lacus vel facilisis volutpat est.
          Ullamcorper malesuada proin libero nunc consequat interdum varius sit.
          Dictum fusce ut placerat orci nulla pellentesque dignissim. Non diam
          phasellus vestibulum lorem. Fringilla phasellus faucibus scelerisque
          eleifend donec pretium.
        </p>
      </div>
      <div class="aboutImg">
        <img class="aboutImgOne" src="images/cupcakes.jpeg" />
      </div>
    </div>
    <div class="rowAboutTwo">
      <div>
        <img class="aboutTwoImg" src="images/cupcakes.jpeg" />
      </div>
      <div class="about">
        <h3 class="headingTwo">Heading Two</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
          commodo viverra maecenas accumsan lacus vel facilisis volutpat est.
          Ullamcorper malesuada proin libero nunc consequat interdum varius sit.
          Dictum fusce ut placerat orci nulla pellentesque dignissim. Non diam
          phasellus vestibulum lorem. Fringilla phasellus faucibus scelerisque
          eleifend donec pretium.
        </p>
        <button class="generalButton">Contact Us</button>
      </div>
    </div>
  </section>
`;
