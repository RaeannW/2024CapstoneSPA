import html from "html-literal";
import * as views from "../views";
import nav from "./nav.js";
import * as store from "../store";

export default (state) =>
  html`
    <section>
      <div class="outer">
        <div class="row">
          <div class="side">${nav(store.nav)}</div>
          <div class="content">
            <div class="row">
              <div class="contentOne">
                ${views[state.view](state)}
              </div>
            </div>
          </div>
        </div>
        <section></section>
      </div>
    </section>
  `;
