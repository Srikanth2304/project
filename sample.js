import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {

    const [isEmail, setIsEmail] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="login-content">
            <div data-uia="password-reset-wrapper">
                <h1 data-uia="password-reset-header">Forgot Email/Password</h1>
                <p data-uia="password-reset-subheader">How would you like to reset your password?</p>
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
                        <label htmlFor="bxid_resetPasswordChoice_email" data-uia="label+email">Email</label>
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
                        <label htmlFor="bxid_resetPasswordChoice_text" data-uia="label+text">Text Message (SMS)</label>
                    </div>
                </div>

                {isEmail ? (
                    <div>
                        <p data-uia="email-description">Check the Otp sent to your Registerd Mail ID.</p>
                        <div className="contact-input-wrapper">
                            <label class="contact-method-input ui-label ui-input-label" id="lbl-forgot_password_input">
                                <span class="ui-label-text"></span>
                                <input
                                    type="email"
                                    data-uia="forgot_password_input"
                                    class="ui-text-input"
                                    name="forgot_password_input"
                                    id="forgot_password_input"
                                    value=""
                                    placeholder="name@mail.com"
                                    tabIndex="0"
                                />
                            </label>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p data-uia="number-description">Check the Otp sent to your Registerd Mobile Number.</p>
                        <div className="contact-input-wrapper">
                            <label class="contact-method-input ui-label ui-input-label" id="lbl-forgot_password_number_input">
                                <span class="ui-label-text"></span>
                                <input
                                    type="tel"
                                    data-uia="forgot_password_number_input"
                                    class="ui-text-input"
                                    name="forgot_password_number_input"
                                    id="forgot_password_number_input"
                                    value=""
                                    placeholder="Enter your phone number"
                                    tabIndex="0"
                                />
                            </label>
                        </div>
                    </div>
                )}

                <button class="btn forgot-password-action-button btn-blue btn-large" type="button" autoComplete="off" tabIndex="0" data-uia="action_forgot_password">
                    {isEmail ? "Email Me" : "Text Me"}
                </button>

            </div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
