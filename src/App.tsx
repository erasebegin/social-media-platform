import EventDashboard from "./components/events/EventDashboard";
import Navbar from "./components/Navbar";
import {Container} from 'semantic-ui-react'

function App() {
  return (
    <>
      <Navbar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
