import { header, main, nav} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/"); //creates new Navigo object

function render(state = store.notes) {
  document.querySelector("#root").innerHTML = `
      ${main(state)}
    `;

  router.updatePageLinks();
}
//invoke render inside router method (after router is set up)


function handleEventDragResize(info) {
  const event = info.event;

  if (confirm("Are you sure about this change?")) {
    const requestData = {
      title: event.title,
      start: event.start.toJSON(),
      end: event.end.toJSON(),
      url: event.url
    };

    axios
      .put(`${process.env.API_URL}/appointments/${event.id}`, requestData)
      .then(response => {
        console.log(
          `Event '${response.data.title}' (${response.data._id}) has been updated.`
        );
      })
      .catch(error => {
        info.revert();
        console.log("It puked", error);
      });
  } else {
    info.revert();
  }
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar

  if (state.view === "Schedule") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;

      const requestData = {
        title: inputList.title.value,
        allDay: inputList.allDay.checked,
        start: new Date(inputList.start.value).toJSON(),
        end: new Date(inputList.end.value).toJSON()
      };

      console.log("matsinet-index.js:72-requestData:", requestData);

      axios
        .post(`${process.env.API_URL}/appointments`, requestData)
        .then(response => {
          store.calendar.appointments.push(response.data);
          console.log(
            "matsinet-index.js:76-store.calendar.appointments:",
            store.calendar.appointments
          );
          router.navigate("/calendar");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  if (state.view === "calendar") {
    const calendarEl = document.getElementById("calendar");
    calendar = new Fullcalendar.calendar(calendarEl, {
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
      buttonText: {
        today: "Today",
        month: "Month",
        week: "Week",
        day: "Day",
        list: "List"
      },
      height: "100%",
      dayMaxEventRows: true,
      navLinks: true,
      editable: true,
      selectable: true,
      eventClick: function(info) {
        // change the border color just for fun
        info.el.style.borderColor = "red";
      },
      eventDrop: function(info) {
        handleEventDragResize(info);
      },
      eventResize: function(info) {
        handleEventDragResize(info);
      },
      select: info => {
        const title = prompt("Please enter a title");

        if (title) {
          const requestData = {
            title: title,
            start: info.start.toJSON(),
            end: info.end.toJSON(),
            allDay: info.view.type === "dayGridMonth"
          };

          axios
            .post(`${process.env.API_URL}/appointments`, requestData)
            .then(response => {
              // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
              response.data.title = response.data.title;
              response.data.url = `/appointments/${response.data._id}`;
              store.Appointments.appointments.push(response.data);
              console.log(
                `Event '${response.data.title}' (${response.data._id}) has been created.`
              );
              calendar.addEvent(response.data);
              calendar.unselect();
            })
            .catch(error => {
              console.log("It puked", error);
            });
        } else {
          calendar.unselect();
        }
      },
      events: state.appointments || []
    });
    calendar.render();
  }

  if (state.view === "Appointments") {
    const deleteButton = document.getElementById("delete-appointment");
    deleteButton.addEventListener("click", event => {
      deleteButton.disabled = true;

      if (confirm("Are you sure you want to delete this appointment")) {
        axios
          .delete(
            `${process.env.API_URL}/appointments/${event.target.dataset.id}`
          )
          .then(response => {
            // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
            console.log(
              `Event '${response.data.title}' (${response.data._id}) has been deleted.`
            );
            router.navigate("/calendar");
          })
          .catch(error => {
            console.log("It puked", error);
          });
      } else {
        deleteButton.disabled = false;
      }
    });
  }
}


router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "notes";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      // New Case for the Home View
      case "notes":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
          )
          .then((response) => {
            // Create an object to be stored in the Home state from the response
            // Round Temp = Math.round();
            store.notes.weather = {
              city: response.data.name,
              temp: Math.round(response.data.main.temp),
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
      case "calendar":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
          )
          .then((response) => {
            // Create an object to be stored in the Home state from the response
            // Round Temp = Math.round();
            store.calendar.weather = {
              city: response.data.name,
              temp: Math.round(response.data.main.temp),
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



        case "calendar":
          axios
            .get(`${process.env.API_URL}/appointments`)
            .then(response => {
              const events = response.data.map(event => {
                return {
                  id: event._id,
                  title: event.title || event.customer,
                  start: new Date(event.start),
                  end: new Date(event.end),
                  url: `/appointments/${event._id}`,
                  allDay: event.allDay || false
                };
              });
              store.calendar.appointments = events;
              done();
            })
            .catch(error => {
              console.log("It puked", error);
            });
          break;
          case "Appointments":
            axios
              .get(`${process.env.API_URL}/appointments/${id}`)
              .then(response => {
                store.Appointments.event = {
                  id: response.data._id,
                  title: response.data.title || response.data.customer,
                  start: new Date(response.data.start),
                  end: new Date(response.data.end),
                  url: `/appointment/${response.data._id}`
                };
                done();
              })
              .catch(error => {
                console.log("It puked", error);
              });
            break;




      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
      // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "notes";

    render(store[view]);
  },
  after: (match) => {
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    // document.querySelector(".fa-bars").addEventListener("click", () => {
    //   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    // });
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
      const view = match?.data?.view ? camelCase(match.data.view) : "notes";
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
