import qr_ios from "../../../assets/img/qr-ios.svg"


import qr_android from "../../../assets/img/qr-android.svg"
import iphone_app from "../../../assets/img/iphone-app.svg"
import Card1 from '../../components/Card1';
const TopSection = () => {

    return (
        <div>

            <div className="login-bar">
                <a href="/Register" className="login">Login / Register</a>
            </div>

            <section id="hero" className="d-flex align-items-center  hero">
                <div className="container position-relative"
                    data-aos="fade-up" data-aos-delay="100"
                >
                    <div className="row justify-content-center banner-section">
                        <div className="col-xl-5 col-lg-9">
                            <div className="portfolio-details">
                                <div className="owl-carousel portfolio-details-carousel">
                                    <div className="img-fluid">
                                        <div className="portfolio-description">
                                            <h2>Register now</h2>
                                            <h1>my eBooking</h1>
                                            <p>Limited time offer valid until end of 2020 for free registration to our my eBooking platform</p>
                                        </div>
                                    </div>
                                    <div className="img-fluid">
                                        <div className="portfolio-description">
                                            <h2>Register now</h2>
                                            <h1>my eBooking</h1>
                                            <p>Limited time offer valid until end of 2020 for free registration to our my eBooking platform</p>
                                        </div>
                                    </div>
                                    <div className="img-fluid">
                                        <div className="portfolio-description">
                                            <h2>Register now</h2>
                                            <h1>my eBooking</h1>
                                            <p>Limited time offer valid until end of 2020 for free registration to our my eBooking platform</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <img src={iphone_app}></img>
                        <div className="app-info">
                            <h2>Download</h2>
                            <p>our app for <br />iOS & Android<br />Devices</p>
                            <div className="qr-codes">
                                <img src={qr_ios} />
                                <img src={qr_android} />
                            </div>
                        </div>
                    </div>


                    <div className="row icon-boxes">
                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
                            data-aos="zoom-in" data-aos-delay="200"
                        >
                            <div className="icon-box">
                                <div className="icon"><i className="ri-stack-line"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
                            data-aos="zoom-in" data-aos-delay="300"
                        >
                            <div className="icon-box">
                                <div className="icon"><i className="ri-palette-line"></i></div>
                                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
                            data-aos="zoom-in" data-aos-delay="400"
                        >
                            <div className="icon-box">
                                <div className="icon"><i className="ri-command-line"></i></div>
                                <h4 className="title"><a href="">Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>


                    </div>
                    <div className="row icon-boxes">
                        <Card1
                            cardTitle="TEST TITLE"
                            cardDiscription="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officias"
                            iconName="ri-palette-line"
                        >

                        </Card1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TopSection;