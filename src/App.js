
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import SectionPrincipal from './components/section-principal/SectionPrincipal'
import SectionSecondary from './components/section-secondary/SectionSecondary'

function App() {
  return (
    <>
      <Header />
      <div className="row flex-shrink-0">
        <div className="col-lg-8">
          <main className="flex-shrink-0">
            <SectionPrincipal />
          </main>
        </div>
        <div className="col-lg-4">
          <SectionSecondary />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
