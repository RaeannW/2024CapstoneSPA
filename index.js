import { header, main, nav} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/"); //creates new Navigo object

function render(state = store.daily) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.nav)}
      ${main(state)}
    `;

  router.updatePageLinks();
}
//invoke render inside router method (after router is set up)

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "daily";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      // New Case for the Home View
      case "daily":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
          )
          .then((response) => {
            // Create an object to be stored in the Home state from the response
            store.daily.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main,
            };
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;
      case "weekly":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.WEATHER_API_URL}/weekly`)
          .then((response) => {
            store.pizza.pizzas = response.data;
            console.log("response", response);
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
      // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "daily";

    render(store[view]);
  },
  after: (match) => {
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  },
});

router
  .on({
    "/": () => render(),
    // Use object destructuring assignment to store the data and (query)params from the Navigo match parameter
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    // This reduces the number of checks that need to be performed
    ":view": (match) => {
      // Change the :view data element to camel case and remove any dashes (support for multi-word views)
      const view = match?.data?.view ? camelCase(match.data.view) : "daily";
      // Determine if the view name key exists in the store object
      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();
//without resolve you get an infinite loop
