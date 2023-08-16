import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function Forgotpass() {
    const [isEmail, setIsEmail] = useState(true);

    return (
        <div className="login-content">
            <div data-uia="password-reset-wrapper">
                <h1 data-uia="password-reset-header">Forgot Password</h1>
                <p data-uia="password-reset-subheader" className="side-heading">How would you like to reset your password?</p>
                <div className="reset-choice-container" data-uia="reset-choice-container">
                    <div className="ui-binary-input">
                        <input
                            type="radio"
                            className="reset-password-choice"
                            name="resetPasswordChoice"
                            id="bxid_resetPasswordChoice_email"
                            value="email"
                            tabIndex="0"
                            data-uia="email"
                            checked={isEmail}
                            onChange={() => setIsEmail(true)}
                        />
                        <label htmlFor="bxid_resetPasswordChoice_email" className="Format-name" data-uia="label+email">Email</label>
                    </div>
                    <div className="ui-binary-input">

                        <input
                            type="radio"
                            className="reset-password-choice"
                            name="resetPasswordChoice"
                            id="bxid_resetPasswordChoice_text"
                            value="text"
                            tabIndex="0"
                            data-uia="text"
                            checked={!isEmail}
                            onChange={() => setIsEmail(false)}
                        />
                        <label htmlFor="bxid_resetPasswordChoice_text" className="Format-name" data-uia="label+text">Text Message (SMS)</label>

                    </div>
                </div>

                {isEmail ? (
                    <div>
                        <p data-uia="email-description">Check the Otp sent to your Registerd Mail ID.</p>
                        <div className="contact-input-wrapper ">
                            {/* <label class="contact-method-input ui-label ui-input-label" id="lbl-forgot_password_input">
                                <span class="ui-label-text"></span>
                                {/* <input

                                    type="email"
                                    data-uia="forgot_password_input"
                                    class="ui-text-input form-control custom-input-size"
                                    name="forgot_password_input"
                                    id="forgot_password_input"
                                    value=""
                                    placeholder="name@mail.com"
                                    tabIndex="0"
                                /> 

                            </label> */}
                            <div className="contact-input-wrapper">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            {/* <i className="bi bi-telephone-fill"></i> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16" style={{ maxHeight: '100%', height: '1.25em' }} >
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <input
                                        type="tel"
                                        data-uia="forgot_password_number_input"
                                        className="form-control"
                                        name="forgot_password_number_input"
                                        id="forgot_password_number_input"
                                        placeholder="Enter your phone number"
                                        tabIndex="0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p data-uia="number-description">Check the Otp sent to your Registerd Mobile Number.</p>
                        <div className="contact-input-wrapper">
                            {/* <label class="contact-method-input ui-label ui-input-label" id="lbl-forgot_password_number_input">
                                <span class="ui-label-text "></span>
                                <input
                                    type="tel"
                                    data-uia="forgot_password_number_input"
                                    class="ui-text-input form-control custom-input-size"
                                    name="forgot_password_number_input"
                                    id="forgot_password_number_input"
                                    value=""
                                    placeholder="Enter your phone number"
                                    tabIndex="0"
                                />
                            </label> */}
                            {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet" /> */}
                            {/* <div>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="bi bi-telephone-fill"></i>
                                    </span>
                                </div>

                            </div> */}
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16" style={{ maxHeight: '100%', height: '1.25em' }}>
                                            <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.288.445.746.253 1.13l-1.036 2.07a.62.62 0 0 0 .227.63l2.099 1.516a.62.62 0 0 0 .634.069l2.036-1.293a.62.62 0 0 1 .634.067l1.516 2.099a.62.62 0 0 0 .63.227l2.07-1.036a.621.621 0 0 1 1.129.253l1.314 2.905c.194.428.309.902.309 1.428 0 1.042-.92 2.5-1.885 2.5a.63.63 0 0 0-.374.116l-2.014 1.608a1.745 1.745 0 0 1-1.996.103 17.657 17.657 0 0 1-6.3-5.004 17.68 17.68 0 0 1-4.641-6.238A1.747 1.747 0 0 1 .511 2.18 2.618 2.618 0 0 1 1.885.511z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <input
                                    type="tel"
                                    data-uia="forgot_password_number_input"
                                    className="form-control"
                                    name="forgot_password_number_input"
                                    id="forgot_password_number_input"
                                    placeholder="Enter your phone number"
                                    tabIndex="0"
                                />
                            </div>


                        </div>
                    </div>
                )}

                <br></br>

                <button class=" btn forgot-password-action-button btn-primary btn-large" type="button" autoComplete="off" tabIndex="0" data-uia="action_forgot_password">
                    {isEmail ? "Email Me" : "Text Me"}
                </button>


            </div>
        </div>
    );
}

export default Forgotpass;
