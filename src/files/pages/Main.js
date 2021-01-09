import React, { Component } from 'react';

// import '../../assets/css/style.css'

// import '../../assets/vendor/bootstrap/css/bootstrap.min.css'
// import '../../assets/vendor/icofont/icofont.min.css'
// import '../../assets/vendor/boxicons/css/boxicons.min.css'
// import '../../assets/vendor/remixicon/remixicon.css'
// import '../../assets/vendor/venobox/venobox.css'
// import '../../assets/vendor/owl.carousel/assets/owl.carousel.min.css'
// import '../../assets/vendor/aos/aos.css'


import TopSection from './MainSection/TopSection';
import Header from './Header'
import Footer from './Footer'
import ContactSection from './MainSection/ContactSection'
import CountSection from './MainSection/CountSection'
import PricingSection from './MainSection/PricingSection';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                {/* <Header /> */}
                <TopSection />
                <CountSection />
                <PricingSection />
                <ContactSection />
                
                {/* <Footer /> */}
                
            </>
        );
    }
}

export default Main;