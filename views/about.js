import html from "html-literal";
import { header, heartStarCircle } from "../components";
import me from "../assets/img/me.png";
import design from "../assets/img/businessCard.png";

export default state => html`
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
        <h3 class="headingOne">Get to Know Me</h3>
        <p>
          Hello, my name’s Rae Wiechens👋 I’m a graphic designer learning full
          stack development. I enjoy designing email layouts and web graphics,
          as well as creating print materials such as brochures, stickers,
          catalogs and holiday cards. I’ve provided my experience as a designer
          and marketer to help companies within the manufacturing and tech
          industries.
          <br /><br />My goal is to use my creative and technical skillset to
          transition into a front-end developer role.
        </p>
      </div>
      <div class="aboutImg">
        <a href="https://www.raewiechens.com/" target="_blank">
          <img class="aboutImg" src="${design}" alt="design services" />
        </a>
      </div>
    </div>
    <div class="rowAboutTwo">
      <div>
        <img class="aboutImgTwo" src="${me}" alt="Rae Wiechens" />
      </div>
      <div class="about">
        <h3 class="headingTwo">Interest & Hobbies</h3>
        <p>
          In my freetime, I love drawing and crafting. You can check out some of
          my stickers and other designs on my
          <a href="https://www.raewiechens.com/" target="_blank">website</a> or Etsy shop:
          <a href="https://www.etsy.com/shop/RaeDoesDoodles" target="_blank">RaeDoesDoodles</a>.
          <br /><br />
          When I'm not designing, I'm spending time with my fiance and two
          rabbits, Bilbo and Serene. I'm a member of the St. Louis Rowing Club,
          and enjoy spending time out in nature.
        </p>
      </div>
    </div>
  </section>
`;
