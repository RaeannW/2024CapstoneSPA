import html from "html-literal";
import { header, heartStarCircle } from "../components";

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
    <h2 class="regText">hello name</h2>
    <h2 class="date regText">day: ${state.date.toString().split(" ")[0]}</h2>
    </div>
    <div class="rowAbout">
      <div class="about">
        <h3 class="headingOne">Enter Username</h3>
        <form id="profile" method="POST" action="">
          <div>
            <label for="username">Name:</label><br>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Name"
              required
            />
          </div>
          <input type="hidden" name="username" id="username" value="username" />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    </div>
  </section>
`;

/* <form id="profile" method="POST" action="">
<h2>Enter Name</h2>
<div>
<label for="username">Name:</label>
<input
  type="text"
  name="username"
  id="username"
  placeholder="Name"
  required
/>
</div>
<input
type="hidden"
name="username"
id="username"
value="username"
/>
<input type="submit" name="submit" value="Submit" />
</form>
<p>${state.profile.username}</p> */
