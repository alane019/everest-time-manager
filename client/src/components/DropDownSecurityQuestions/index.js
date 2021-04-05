import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import questions from "../../utils/securityQuestion.js";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [secQuestion, setSecQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [buttonTitle, setButtonTitle] = React.useState(
    "Set security question *"
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const secQuestionData = {
    question: secQuestion,
    answer: answer,
  };

  return (
    <div>
      <div onClick={handleClickOpen} className="foot-lnk">
        <a href="#">{buttonTitle}</a>
      </div>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Set security question</DialogTitle>

        <form className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-dialog-native">
              Chose a security question?
            </InputLabel>
            <Select
              onChange={(e) => setSecQuestion(e.target.value)}
              native
              input={<Input id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              {questions.map((question) => {
                return <option value={question}>{question}</option>;
              })}
            </Select>
            <TextField
              id="standard-basic"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              label="Answer"
            />
            <Button
              onClick={handleClose}
              color="primary"
              style={{ width: "50%", display: "inline" }}
            >
              Cancel
            </Button>
            <Button
              style={{ width: "50%", display: "inline" }}
              onClick={() => {
                if (secQuestion === "") {
                  alert("Don't forget to choose a security question");
                  return;
                }
                if (answer === "") {
                  alert("You need to add an answer");
                  return;
                }
                props.handleSetSecQuestion(secQuestionData);
                setButtonTitle("Security Question is Set");
                handleClose();
              }}
              color="primary"
            >
              Ok
            </Button>
          </FormControl>
        </form>

        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
