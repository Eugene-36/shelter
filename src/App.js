import './App.css';
import s from '../src/components/styles/base.module.css';

// Импорт компонентов
import Navigation from './components/navigation/navigation';
import Hero from './components/hero/hero';
import AboutShelter from './components/aboutTheShelter/aboutTheShelter';
import Carts from './components/cartsAnimal/cartsAnimal';
import Help from './components/help/help';
import Donation from './components/donation/donation';
import Footer from './components/footer/footer';
//! Тут нужно в класс добавить  "container" чтобы всё обернулось в рамки контейнера
function App() {
  return (
    <div className={s.container}>
      <div className='back'>
      <Navigation />
      <Hero />
      </div>
      <AboutShelter />
      <Carts />
      <Help />
      <Donation />
      <Footer />
    </div>
  );
}

export default App;
