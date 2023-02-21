import React from "react";
import "../../components_events/styles.css";
import { Link } from 'react-router-dom'

const Event = ({ data, setData }) => {
  const [show, setShow] = React.useState(false);
  const getDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    let obj = new Object();
    obj.day = day;
    obj.month = month;

    return obj;
  };

  return (
    <div class="container">
      {/* right image  */}
      {data.map((event, index) => {
        if (index % 2 === 0) {
          return (
            <div class="row align-items-center event-block no-gutters margin-40px-bottom">
              <div class="col-lg-5 col-sm-12">
                <div class="position-relative">
                  <img
                    src={event.image}
                    alt=""
                    style={{
                      width: "450px",
                      height: "280px",
                      objectFit: "cover",
                      padding: "8px",
                    }}
                  />
                  <div class="events-date">
                    <div class="font-size28">{getDate(event.date).day}</div>
                    <div class="font-size14">{getDate(event.date).month}</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-sm-12">
                <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                  <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                    <Link href={"/event/" + event._id} class="text-theme-color">
                      {event.name}
                    </Link>
                  </h5>
                  <ul class="event-time margin-10px-bottom md-margin-5px-bottom">
                    <li>
                      {/* <i class="far fa-clock margin-10px-right"></i> 01:30 PM -
                      04:30 PM */}
                      <i class="far fa-clock margin-10px-right"></i>{" "}
                      {event.time}
                    </li>
                    <li>
                      <i class="fa fa-map-marker margin-5px-right"></i> Place :
                      {event.venue}
                    </li>
                  </ul>
                  <p id="desc">
                    {show
                      ? event.description
                      : event.description.substring(0, 100) + "..."}
                  </p>
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                    style={{
                      backgroundColor: "#00a8ff",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100px",
                    }}
                    class="butn small margin-10px-top md-no-margin-top"
                    href="#"
                  >
                    {show ? "Read Less" : "Read More"}{" "}
                    <i class="fas fa-long-arrow-alt-right margin-10px-left"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div class="row align-items-center event-block no-gutters margin-40px-bottom">
              <div class="col-lg-7 order-2 order-lg-1">
                <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                  <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                    <Link to="event-details.html" class="text-theme-color">
                      Event
                    </Link>
                  </h5>
                  <ul class="event-time margin-10px-bottom md-margin-5px-bottom">
                    <li>
                      {/* <i class="far fa-clock margin-10px-right"></i> 09:00 AM -
                      09:30 PM */}
                      <i class="far fa-clock margin-10px-right"></i>
                      {event.time}
                    </li>
                    <li>
                      <i class="fa fa-map-marker margin-5px-right"></i> Place :
                      {event.venue}
                    </li>
                  </ul>
                  <p>
                  {show
                      ? event.description
                      : event.description.substring(0, 100) + "..."}
                  </p>
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                    style={{
                      backgroundColor: "#00a8ff",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100px",
                    }}
                    class="butn small margin-10px-top md-no-margin-top"
                    href="#"
                  >
                    Read More{" "}
                    <i class="fas fa-long-arrow-alt-right margin-10px-left"></i>
                  </button>
                </div>
              </div>
              <div class="col-lg-5 order-1 order-lg-2">
                <div class="position-relative">
                  <img
                    src={event.image}
                    alt=""
                    style={{
                      width: "450px",
                      height: "280px",
                      objectFit: "cover",
                      padding: "8px",
                    }}
                  />
                  <div class="events-date">
                    <div class="font-size28">{getDate(event.date).day}</div>
                    <div class="font-size14">{getDate(event.date).month}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Event;