import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Event } from "../../types";

interface Props {
  eventData: Event;
}

export default function EventListItem({ eventData }: Props) {
  const { title, date, description, venue, hostedBy, hostPhotoURL, attendees } =
    eventData;

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header content={title} />
              <Item.Description>{hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {date}
          <Icon name="marker" /> {venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees && attendees.map((attendee) => {
            return (
              <EventListAttendee key={attendee.id} attendeeData={attendee} />
            );
          })}
        </List>
      </Segment>
      <Segment clearing>
        <div>{description}</div>
        <Button positive inverted floated="right" content="View" />
      </Segment>
    </Segment.Group>
  );
}
