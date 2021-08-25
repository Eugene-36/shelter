import './App.css';
import Check from './components/check/check';

//! Тут нужно в класс добавить  "container" чтобы всё обернулось в рамки контейнера
function App() {
  return (
    <div className="App">
      <p>такс, вроде всё нормально работает</p>
      <Check />
    </div>
  );
}

export default App;
