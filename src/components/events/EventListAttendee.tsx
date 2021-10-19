import { Image, List } from "semantic-ui-react";
import { Attendee } from "../../types";

interface Props {
  attendeeData: Attendee;
}

export default function EventListAttendee({ attendeeData }: Props) {
  return (
    <List.Item>
      <Image size="mini" circular src={attendeeData.photoURL} />
    </List.Item>
  );
}
