import EventListItem from "./EventListItem";
import { Event } from "../../types";

interface Props {
  events: Event[];
}

export default function EventList({ events }: Props) {
  return (
    <div>
      {events.map((event: Event) => {
        return <EventListItem key={event.id} eventData={event} />;
      })}
    </div>
  );
}
