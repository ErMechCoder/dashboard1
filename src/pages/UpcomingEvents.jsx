import React, { useState, useMemo } from "react";
import axios from "axios";
//import Table from "../components/events/Table";
import Pagination from "../components/pagination/Pagination";

import Event from "../components/events/Event";

let PageSize = 3;

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [evenTitles, setEventTitles] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    // return events.sort((a,b)=>a.date>b.date?1:-1).slice(firstPageIndex, lastPageIndex);
    return events
      .sort((a, b) => (a.date > b.date ? 1 : -1))
      .slice(firstPageIndex, lastPageIndex);
  }, [currentPage, events]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://glhapi.ekanatechnologies.in/api/events/get"
      );
      if (response.status === 200) {
        // const date= new Set(response?.data?.events?.map(event=>event.date.split('T')[0]))
        // const uniqueDate=Array.from(date)
        // const eventsByDate=uniqueDate.map(date=>{
        //   return {
        //     date:date,
        //     events:response.data.events.filter(event=>event.date.split('T')[0]===date)
        //   }
        // })
        // setEvents(eventsByDate)

        // next logic
        setEvents(response.data.events);
        setEventTitles(response.data.events.map((event) => event.name));
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <div class="rn-breadcrumb-inner ptb--30">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-12">
              <h5 class="title text-center text-md-start">Upcoming Events</h5>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <ul class="breadcrumb-list">
                <li class="item">
                  <a href="index.html">Home</a>
                </li>
                <li class="separator">
                  <i class="feather-chevron-right"></i>
                </li>
                <li class="item current">Upcoming Events{evenTitles}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="rn-upcoming-area rn-section-gap">
        <div class="container">
          {/* {
              // events.sort((a,b)=>new Date(b.date) - new Date(a.date))
              currentTableData
              .map((event,index)=>{
                return(
                  <div class="row mt--80" key={index}>
                <div class="col-12">
                  <div class="table-title-area d-flex">
                    <i data-feather="calendar"></i>
                    <h3>{event.date}</h3>
                  </div>

                  <div class="box-table table-responsive">
                    <Table events={event.events}/>
                  </div>
                </div>
              </div>
                )
              })}
     */}

          {/* Next Logic */}

          {/* {currentTableData &&
            currentTableData.map((event, index) => {
              return (
                <div class="row " key={index}>
                  <div class="col-12">
                    <div class="table-title-area d-flex align-items-center justify-content-center my-5 py-4">
                      <i data-feather="calendar"></i>
                      <h3>{event.name}</h3>
                    </div>

                    <div class="box-table table-responsive">

                      <table className="upcoming-projects">
                        <thead>
                          <tr>
                            <th>
                              <span>Event</span>
                            </th>
                            <th>
                              <span>Time</span>
                            </th>
                            <th>
                              <span>Location</span>
                            </th>
                            <th>
                              <span>Price</span>
                            </th>
                            <th>
                              <span>Extras</span>
                            </th>
                            <th>
                              <span>Action</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="color-light" key={index}>
                            <td>
                              <span>{event.name}</span>
                            </td>
                            <td>
                              <span class="color-green">{event.time} UTC</span>
                            </td>
                            <td>
                              <span class="color-danger">{event.venue}</span>
                            </td>
                            <td>
                              <span class="color-info">${event.price}</span>
                            </td>
                            <td>
                              <span class="color-info">
                                {event.description
                                  .split(" ")
                                  .slice(0, 5)
                                  .join(" ")}
                                ...
                              </span>
                            </td>
                            <td>
                              <div class="show-more-btn">
                                <button
                                  class="btn btn-primary"
                                  data-toggle="collapse"
                                  data-target="#demo"
                                  onClick={() => {
                                    //  window.history.pushState(
                                    //   {},
                                    //   "",
                                    //   `/event/${event._id}`
                                    // send to /event/:id without reloading the page

                                    navigate(`/event/${event._id}`);
                                  }}
                                >
                                  Show More
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })} */}

          {currentTableData && (
            <Event data={currentTableData} setData={setEvents} />
          )}
          <Pagination
            currentPage={currentPage}
            totalCount={events.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;