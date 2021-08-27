import './App.css';
import s from '../src/components/styles/base.module.css';

// Импорт компонентов
import Navigation from './components/navigation/navigation';
import Hero from './components/hero/hero';
import AboutShelter from './components/aboutTheShelter/aboutTheShelter';
import Carts from './components/cartsAnimal/cartsAnimal';
import Help from './components/help/help';
import Donation from './components/donation/donation';
//! Тут нужно в класс добавить  "container" чтобы всё обернулось в рамки контейнера
function App() {
  return (
    <div className={s.container}>
      <Navigation />
      <Hero />
      <AboutShelter />
      <Carts />
      <Help />
      <Donation />
    </div>
  );
}

export default App;
