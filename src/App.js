// PACKAGES IMPORT
import Aos from 'aos';
import { Router } from 'react-router-dom';


// STYLES IMPORT
import 'antd/dist/antd.css';
import './assets/css/style.css'
import './App.css';
// -----------
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/venobox/venobox.css'
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './assets/vendor/aos/aos.css'


// PAGES IMPORT
import Header from './files/pages/Header';
import PageFooter from './files/pages/PageFooter';
// ---------------
import history from './files/services/history';
import Routes from './files/services/Routes';


// REDUX IMPORTS
import store from './files/services/redux/store'
import { saveState } from './files/services/redux/localStorage'

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
    store.subscribe(() => {
        saveState(store.getState());
    });
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
