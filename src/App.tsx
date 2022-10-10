import { ContextAggregator } from './global/contexts/aggregator';
import Home from './pages/Home';

function App() {
  return (
    <ContextAggregator>
      <Home />
    </ContextAggregator>
  );
}

export default App;
