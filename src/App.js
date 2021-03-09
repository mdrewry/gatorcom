import React, { useState, Fragment } from "react";
import "./App.css";
import Chat from "./Chat";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Landing from "./Landing";
import SurveyForm from "./SurveyForm";
function App() {
  const [userOneName, setUserOneName] = useState("");
  const [userTwoName, setUserTwoName] = useState("");
  const [userOneInput, setUserOneInput] = useState("hello");
  const [userTwoInput, setUserTwoInput] = useState("");
  const [userOneChat, setUserOneChat] = useState([]);
  const [userTwoChat, setUserTwoChat] = useState([]);
  const [userOneLang, setUserOneLang] = useState("en");
  const [userTwoLang, setUserTwoLang] = useState("de");
  const [surveyLabels, setSurveyLabels] = useState({
    header: {
      langOne: "Thanks for using the app!",
      langTwo: "Thanks for using the app!",
    },
    button: { langOne: "Send Feedback", langTwo: "Send Feedback" },
  });
  const [userOneLabels, setUserOneLabels] = useState({
    button: "Translate",
    autocomplete: "Say Something",
  });
  const [userTwoLabels, setUserTwoLabels] = useState({
    button: "Translate",
    autocomplete: "Say Something",
  });
  const [sessionEndButtonLabel, setSessionEndButtonLabel] = useState({
    langOne: "End Chat",
    langTwo: "End Chat",
  });
  const [page, setPage] = useState(0);
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const title = "GatorCom";
  return (
    <div className="app">
      <AppBar className="padding10" position="sticky" variant="outlined">
        <Toolbar className="row">
          <Typography className="appTitle">{title}</Typography>
          <div className="grow" />
          {page === 1 && (
            <Button onClick={handleNextPage}>
              {sessionEndButtonLabel.langOne}
              <br />
              {sessionEndButtonLabel.langTwo}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Grid className="chatGridWrapper" container spacing={0}>
        {page === 0 && (
          <Landing
            userOneName={userOneName}
            setUserOneName={setUserOneName}
            userTwoName={userTwoName}
            setUserTwoName={setUserTwoName}
            userOneLang={userOneLang}
            setUserOneLang={setUserOneLang}
            userTwoLang={userTwoLang}
            setUserTwoLang={setUserTwoLang}
            handleNextPage={handleNextPage}
            setSurveyLabels={setSurveyLabels}
            setUserOneLabels={setUserOneLabels}
            setUserTwoLabels={setUserTwoLabels}
            setSessionEndButtonLabel={setSessionEndButtonLabel}
          />
        )}
        {page === 1 && (
          <Fragment>
            <Chat
              userInput={userOneInput}
              setUserInput={setUserOneInput}
              userLang={userOneLang}
              setUserLang={setUserOneLang}
              userChat={userOneChat}
              setUserChat={setUserOneChat}
              labels={userOneLabels}
              otherChat={userTwoChat}
              setOtherChat={setUserTwoChat}
              otherLang={userTwoLang}
              user="one"
              userName={userOneName}
            />
            <Chat
              userInput={userTwoInput}
              setUserInput={setUserTwoInput}
              userLang={userTwoLang}
              setUserLang={setUserTwoLang}
              userChat={userTwoChat}
              setUserChat={setUserTwoChat}
              labels={userTwoLabels}
              otherChat={userOneChat}
              setOtherChat={setUserOneChat}
              otherLang={userOneLang}
              user="two"
              userName={userTwoName}
            />
          </Fragment>
        )}
        {page === 2 && (
          <SurveyForm
            labels={surveyLabels}
            setPage={setPage}
            setUserOneInput={setUserOneInput}
            setUserTwoInput={setUserTwoInput}
            setUserOneChat={setUserOneChat}
            setUserTwoChat={setUserTwoChat}
            setUserOneName={setUserOneName}
            setUserTwoName={setUserTwoName}
            setUserOneLang={setUserOneLang}
            setUserTwoLang={setUserTwoLang}
            setSurveyLabels={setSurveyLabels}
            setUserOneLabels={setUserOneLabels}
            setUserTwoLabels={setUserTwoLabels}
            setSessionEndButtonLabel={setSessionEndButtonLabel}
          />
        )}
      </Grid>
    </div>
  );
}

export default App;
