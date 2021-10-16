import EventDashboard from "./components/events/EventDashboard";
import Navbar from "./components/Navbar";
import {Container} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>
  );
}

export default App;
