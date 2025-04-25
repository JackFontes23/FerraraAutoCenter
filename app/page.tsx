import Header from './components/Header';
import Services from './components/servicos';
import Location from './components/Localizacao';
import About from './components/Sobre';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Services />
        <Location />
        <About />
      </main>
    </>
  );
}