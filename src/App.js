import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contact />}/>
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App;