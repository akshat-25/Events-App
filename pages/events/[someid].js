import ErrorAlert from "@/components/error-alert/error-alert";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";

import { useRouter } from "next/router";
import React, { Fragment } from "react";

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.someid;
  console.log("Event ID = " + eventId);
  const event = getEventById(eventId);
  console.log(event);

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <ErrorAlert>
          <p>{event.description}</p>
        </ErrorAlert>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
