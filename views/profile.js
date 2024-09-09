import html from "html-literal";
import { header, heartStarCircle, day, name } from "../components";

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
    <div class="greetingDate">
      ${name()} ${day()}
    </div>
    <div class="rowAbout">
      <div class="about">
        <h3 class="headingOne">Enter Username</h3>
        <form id="profile" method="POST" action="">
          <div>
            <label for="username">Name:</label><br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Name"
              required
            />
          </div>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    </div>
  </section>
`;
