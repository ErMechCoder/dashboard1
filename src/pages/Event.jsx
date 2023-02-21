import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Event = () => {
  const [event, setEvent] = React.useState([]);

  const id = window.location.pathname.split("/")[2];

  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        "http://glhapi.ekanatechnologies.in/api/events/get"
      );
      if (res.status === 200) {
        const event = res.data.events.filter((event) => event._id === id);
        setEvent(event[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchEvents();
  }, [id]);

  return (
    <div>
      <div
        class="rn-breadcrumb-inner pt--120 pb--60"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-content text-center">
                <h2 class="title">{event.name}</h2>
                <ul class="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/upcoming-events">Events</Link>
                  </li>
                  <li>
                    <span>{event.name}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rn-event-details ptb--120 bg_color--1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="event-details-inner">
                <div class="event-details-content">
                  <div class="event-details-thumb">
                    <img src={event.image} alt="event details images" />
                  </div>
                  <div class="event-details-info">
                    <div class="event-details-info-inner">
                      <div class="event-details-entry">
                        <h2 class="title">{event.name}</h2>
                        <ul class="event-details-meta">
                          <li>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span>{event.date}</span>
                          </li>
                          <li>
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                            <span>{event.time}</span>
                          </li>
                          <li>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span>{event.venue}</span>
                          </li>
                        </ul>
                      </div>
                      <div class="event-details-entry">
                        <p>{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;