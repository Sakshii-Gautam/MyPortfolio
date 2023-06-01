import { About, Contact, Footer, Header, Projects, Skills } from './container';

function App() {
  return (
    <div style={{ overflow: 'auto' }}>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
