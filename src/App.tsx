import './App.scss'

import SolarPanelOrientator from './components/SolarPanelOrientator'

function App() {
  return (
    <div className="App">
      <SolarPanelOrientator title="Orientation 1 (Sud 0)" showOrientation={true} arrowColor="#ffc107" angleMode="Sud_0" />
      <SolarPanelOrientator title="Orientation 2 (Sud 180)" showOrientation={true} arrowColor="#7952b3" angleMode="Sud_180" />
      <SolarPanelOrientator title="Orientation 3 (Sud 0)" showOrientation={true} arrowColor="#47597e" angleMode="Sud_0" />
    </div>
  );
}

export default App;
