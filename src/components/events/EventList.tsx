import EventListItem from "./EventListItem";

interface Props {
  events: {};
}

export default function EventList({ events }: Props) {
  return (
    <div>
      <EventListItem />
    </div>
  );
}
