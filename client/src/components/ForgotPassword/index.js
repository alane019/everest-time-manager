import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import "bootstrap/dist/css/bootstrap.min.css";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [securityQuestion, setSecurityQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [status, setStatus] = React.useState("email");
  const [password, setPassword] = React.useState("new password");
  const [repeatedPassword, setRepeatedPassword] = React.useState(
    "confirm new password"
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function getSecurityQuestion(email) {
    API.getSecurityQuestion(email).then((res) => {
      setSecurityQuestion(res.data);
      setStatus("question");
    });
  }
  function getUserId(email, answer) {
    API.getUserId(email, answer).then((res) => {
      setUserId(res.data);
      setStatus("reset-password");
    });
  }

  function changePassword(userId, password) {
    API.setNewPassword(userId, password)
      .then((res) => {
        setStatus("success");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function resetPassword() {
    switch (status) {
      case "email":
        return (
          <div className="card" id="pop-up-card">
            <div className="group">
              <label htmlFor="email" className="label">
                What is your email address?
              </label>
              <input
                id="email"
                type="text"
                className="input"
                placeholder="email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>
                  <IconButton aria-label="delete" onClick={() => handleClose()}>
                    <CloseIcon />
                  </IconButton>{" "}
                  <IconButton
                    aria-label="delete"
                    onClick={() => getSecurityQuestion(email)}
                  >
                    <CheckIcon />
                  </IconButton>
                </strong>
              </li>
            </ul>
          </div>
        );

      case "question":
        return (
          <div className="card" id="pop-up-card">
            <div className="group">
              <label htmlFor="security-question" className="label">
                {securityQuestion}
              </label>
              <input
                id="security-question"
                type="text"
                className="input"
                placeholder="answer..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>
                  <IconButton aria-label="delete" onClick={() => handleClose()}>
                    <CloseIcon />
                  </IconButton>{" "}
                  <IconButton onClick={() => getUserId(email, answer)}>
                    <CheckIcon />
                  </IconButton>
                </strong>
              </li>
            </ul>
          </div>
        );
      case "reset-password":
        return (
          <div className="card" id="pop-up-card">
            <h4>Email: {email}</h4>
            <div className="group">
              <label htmlFor="pass" className="label">
                New Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="group">
              <label htmlFor="pass2" className="label">
                Confirm New Password
              </label>
              <input
                id="pass2"
                type="password"
                className="input"
                data-type="password"
                onChange={(e) => setRepeatedPassword(e.target.value)}
              />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>
                  <IconButton aria-label="delete" onClick={() => handleClose()}>
                    <CloseIcon />
                  </IconButton>{" "}
                  <IconButton onClick={() => changePassword(userId, password)}>
                    <CheckIcon />
                  </IconButton>
                </strong>
              </li>
            </ul>
          </div>
        );
      case "success":
        return (
          <div className="card" id="pop-up-card">
            <i>Your new password is set!</i>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>
                  <IconButton aria-label="delete" onClick={() => handleClose()}>
                    <CloseIcon />
                  </IconButton>{" "}
                  <IconButton onClick={() => handleClose()}>
                    <CheckIcon />
                  </IconButton>
                </strong>
              </li>
            </ul>
          </div>
        );
    }
  }

  return (
    <>
      <div onClick={handleOpen} className="foot-lnk">
        <a href="#">Forgot password ?</a>
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{resetPassword()}</Fade>
      </Modal>
    </>
  );
}
