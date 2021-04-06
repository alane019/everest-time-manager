import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    color: "#042046",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2
        style={{
          textAlign: "center",
          color: "#042046",
          marginBottom: "20px",
        }}
      >
        <strong>FAQ</strong>
      </h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What is the purpose of the Everest App?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Everest App is about achieving your desired goals through
            customizable tasks and activities that you track with ease on a
            daily basis. Also, the app will help you focus on one task at the
            time, will demonstrate how much time you spend on different things
            and will help you visualize where you was productive and where you
            was not.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            How to use Everest App?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Go to Home page.
            <br />
            2. Open the Pull Up icon on the bottom of the page. <br />
            3. Create a Project you want to work on. <br />
            4. Press on Project Name or on the List icon on the right. <br />
            5. Create multiple tasks that are part of that project. <br />
            6. Begin tracking the time you work on that tasks by pushing start
            and stop icon from the task.
            <br />
            7. On the Home Page will be displayed the History of your actions.{" "}
            <br />
            8. On the Chart Page you will visualize the amount of time you spent
            on different tasks. <br />
            9. If you have other questions, contact any of the Developers listed
            on Meet the Team page, and we friendly will come for help.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Why Everest App?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Establishing daily goals in a tangible format is scientifically
            proven to provide an enhanced focus that leads to increased
            productivity. In 1979, researchers at "The Harvard MBA Business
            School" conducted a study highlighting the importance of goal
            setting. Furthermore, documenting those desired goals is essential
            to the likelihood of achieving your goals. Finally, the Everest app
            will be part of your journey to become successful.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            App doesn't work, how to receive support from one of the
            specialists?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you found any errors, visit our Meet The Team page located in the
            center of the Navigation Bar; then, ask any of the Developers for
            help on their posted email address.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
