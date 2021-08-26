import './App.css';
import Check from './components/check/check';
import s from '../src/components/styles/base.module.css';

// Импорт компонентов
import Navigation from './components/navigation/navigation';

//! Тут нужно в класс добавить  "container" чтобы всё обернулось в рамки контейнера
function App() {
  return (
    <div className={s.container}>
      <Navigation />
    </div>
  );
}

export default App;
