import logo from './logo.svg';
import './App.css';

import Aos from 'aos';
import Main from './files/pages/Main'

import { Router } from 'react-router-dom';



import history from './files/services/history';
import Routes from './files/services/Routes';

import './assets/css/style.css'

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/venobox/venobox.css'
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './assets/vendor/aos/aos.css'

import Header from './files/pages/Header';


import 'antd/dist/antd.css';
import PageFooter from './files/pages/PageFooter';


// import AboutSection from './files/pages/MainSection/AboutSection';
// import CountSection from './files/pages/CountSection';
// import ServicesSection from './files/pages/ServicesSection';
// import ContactSection from './files/pages/ContactSection';
// import Header from './files/pages/Header';
// import BackToTopButton from './files/components/BackToTopButton';
// import Footer from './files/pages/Footer';
// import ColapsableRow from './files/components/ColapsableRow';
// import FaqSection from './files/pages/FaqSection';

// import 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500&display=swap'

function App() {
    Aos.init();
    return (
        <div className="App">
            <Header />
            <Router history={history}>
                <Routes />
            </Router>
            <PageFooter />

        </div>
    );
}

export default App;
