import { Grid } from "semantic-ui-react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import sampleData from "../../api/sampleData";

interface Props {
  showEventForm: boolean;
  setShowEventForm: (formState: boolean) => void;
}

export default function EventDashboard({ showEventForm, setShowEventForm }: Props) {

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        {showEventForm && <EventForm setShowEventForm={setShowEventForm} />}
      </Grid.Column>
    </Grid>
  );
}
