import './App.css';
import Hero from './components/hero/hero'
import s from '../src/components/styles/base.module.css';

// Импорт компонентов
import Navigation from './components/navigation/navigation';

//! Тут нужно в класс добавить  "container" чтобы всё обернулось в рамки контейнера
function App() {
  return (
    <div className={s.container}>
      <Navigation />
      <Hero/>
    </div>
  );
}

export default App;
