import { Helmet } from 'react-helmet';
import NavDesktop from './components/NavDesktop/NavDesktop.jsx';
import NavMobile from './components/NavMobile/NavMobile.jsx';
import Header from './components/Header/Header.jsx';
import Services from './components/Services/Services.jsx';
import Offer from './components/Offer/Offer.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Timeline from './components/Timeline/Timeline.jsx';

function App() {

  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet"/>
      </Helmet>
      <NavMobile/>
      <NavDesktop />
      <Header/>
      <Services/>
      <Offer/>
      <AboutMe/>
      <Timeline/>
    </div>
  );
}

export default App;