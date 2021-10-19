import EventDashboard from "./components/events/EventDashboard";
import Navbar from "./components/Navbar";
import { Container } from 'semantic-ui-react'
import { useState } from "react";

function App() {

  const [showEventForm, setShowEventForm] = useState(false);

  return (
    <>
      <Navbar setShowEventForm={setShowEventForm} />
      <Container className="main">
        <EventDashboard showEventForm={showEventForm} setShowEventForm={setShowEventForm} />
      </Container>
    </>
  );
}

export default App;
