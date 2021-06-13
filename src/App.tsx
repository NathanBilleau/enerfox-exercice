import './App.scss'

import SolarPanelOrientator from './components/SolarPanelOrientator'

function App() {
  return (
    <div className="App">
      <SolarPanelOrientator title="Orientation Batiment A" showOrientation={true} arrowColor="#ffc107" angleMode="Sud_0" />
    </div>
  );
}

export default App;
