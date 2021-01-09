import React, { Component } from 'react';


import { Input, Radio } from 'antd';
import { validateEmail } from '../../services/ValidateFields';

import store from '../../services/redux/store';
import { USER_LOGIN } from '../../services/redux/actions'
import { Redirect, withRouter} from 'react-router-dom';

class LoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

    }
    componentDidMount() {
        store.subscribe(() => { console.log("Store Changed", store.getState()) })
    }

    onChangeInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
        switch (e.target.name) {
            case "email":
                const error = validateEmail(e.target.value)
                this.setState({
                    emailError: error
                })
        }

    }


    userLogin = () => {
        console.log('Login')

        const sendData = { email: this.state.email, password: this.state.password }

        if (sendData.password === '123') {
            // SUCCESSFULL LOGIN
            const clientData = {
                userName: 'Rajitha Fernando',
                userEmail: this.state.email,
                userImageUrl: '',
                userId: '1',
                isgoogleUser: false,
                role: 'business'
            }
            store.dispatch(USER_LOGIN(clientData))
            this.props.history.push("/Home")
            
        }
        else {
            alert('Login Failed');
        }
        // const clientData = {
        //     userName: response.getBasicProfile().getName(),
        //     userEmail: response.getBasicProfile().getEmail(),
        //     userImageUrl: response.getBasicProfile().getImageUrl(),
        //     userId: response.getBasicProfile().getId(),
        //     isgoogleUser: true
        // }
        // Make API REQUEST AND RECIVE cilentData



    }
    render() {
        return (
            <div>
                <section id="hero" className="about">
                    <div className="container fade-up"
                        data-aos="fade-up"
                    >


                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Email Address</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="email"
                                    className="formInput"
                                    placeholder="Your Email"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Email Address</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="password"
                                    className="formInput"
                                    placeholder="input password"
                                    onChange={this.onChangeInput}
                                />

                            </div>

                        </div>
                        <button type="submit" className="blueButton" onClick={this.userLogin}>Login</button>
                        <br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                </section>

            </div>
        );
    }
}

export default withRouter(LoginUser);