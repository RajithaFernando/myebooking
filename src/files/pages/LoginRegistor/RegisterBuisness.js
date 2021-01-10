import React, { Component } from 'react';
import { EmaplInput, FormRow, MultiLineInput, RadioInput } from '../../components/InputFields';

import { Route, Redirect } from 'react-router-dom';
import { Radio, Input } from 'antd';

import '../../../assets/css/reactStyles.css'

import store from '../../services/redux/store';

class RegisterBuisness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buisnessCategory: 1
        };
    }
    componentDidMount() {
        const userDetails = store.getState().userDetails
        if (!userDetails){
            // return <Redirect to="/Login" exact/>
        }
        else if (userDetails.role != 'businesss'){
            console.log('Hear')
            this.props.history.push("/RegisterBuisnessAccount")
            window.location.reload(true)
            // return <Redirect  to="/RegisterBuisnessAccount" exact/>
        }
    }
    emailChange =(e)=>{
        e.preventDefault()
        console.log(e.target.value)
    }
    onChangeBuisnessCategory = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            buisnessCategory: e.target.value,
        });
    };
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const value = this.state.buisnessCategory
        return (
            <div>
                <section id="hero" className="about">
                    <div className="container fade-up"
                        data-aos="fade-up"
                    >

                        <div className="section-title">
                            <h2 className="headingText">Register Your business</h2>
                            <p> Some Insperational Line </p>
                        </div>



                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Business Name</p>
                            </div>
                            <div className="col-lg-8">
                                <Input placeholder="Your Business Name" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Your Business Category</p>
                            </div>
                            <div className="col-lg-8">
                                <Radio.Group onChange={this.onChangeBuisnessCategory} value={value}>

                                    <Radio style={radioStyle} value={1}>Beauty and care</Radio>
                                    <Radio style={radioStyle} value={2}>Health</Radio>
                                    <Radio style={radioStyle} value={3}>Automobile </Radio>
                                    <Radio style={radioStyle} value={4}>Legal and compliance</Radio>
                                    <Radio style={radioStyle} value={5}>Dining</Radio>
                                    <Radio style={radioStyle} value={6}>Constructions</Radio>

                                </Radio.Group>
                            </div>




                        </div>


                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Your Name</p>
                            </div>
                            <div className="col-lg-4">
                                <Input placeholder = "Your Name"/>
                            </div>

                            <div className="col-lg-2">
                                <p className="description">Your Email Address</p>
                            </div>
                            <div className="col-lg-4">
                                <Input placeholder = "Your Email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Your Mobile No</p>
                            </div>
                            <div className="col-lg-4">
                                <Input placeholder = "7XXXXXXXX"/>
                            </div>

                        </div>
                        <hr />

                        <div className="row">

                            <div className="col-lg-2">
                                <p className="description">Business Phone Number</p>
                            </div>
                            <div className="col-lg-4">
                                <Input placeholder = "7XXXXXXXX" />
                            </div>

                            <div className="col-lg-2">
                                <p className="description">Business Email Address</p>
                            </div>
                            <div className="col-lg-4">
                                <Input placeholder = "FUCK Email" onChange={this.emailChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Business Address</p>
                            </div>
                            <div className="col-lg-4">
                                <MultiLineInput placeholder = "Address"/>

                            </div>
                            <div className="col-lg-2">
                                <p className="description">Discription About Your Business</p>
                            </div>
                            <div className="col-lg-4">
                                <MultiLineInput placeholder = "Your Customers will see this"/>

                            </div>
                        </div>
                        <hr />
                        <div className="row">

                            <div className="col-lg-2">
                                <p className="description">Facebook URL</p>
                            </div>
                            <div className="col-lg-4">
                                <Input />
                            </div>

                            <div className="col-lg-2">
                                <p className="description">Instergram  URL</p>
                            </div>
                            <div className="col-lg-4">
                                <Input />
                            </div>
                        </div>



                        {/* <div className="php-email-form">
                        </div> */}

                    </div>
                </section>
            </div>
        );
    }
}

export default RegisterBuisness;