import { Grid } from "semantic-ui-react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import sampleData from "../../api/sampleData";
import { useState } from "react";
import { Event } from '../../types'

interface Props {
  showEventForm: boolean;
  setShowEventForm: (formState: boolean) => void;
}

export default function EventDashboard({ showEventForm, setShowEventForm }: Props) {

  const [events, setEvents] = useState<Event[]>(sampleData);

  function handleCreateEvent(event: Event): void {
    setEvents([...events, event])
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {showEventForm && <EventForm setShowEventForm={setShowEventForm} handleCreateEvent={handleCreateEvent} />}
      </Grid.Column>
    </Grid>
  );
}
