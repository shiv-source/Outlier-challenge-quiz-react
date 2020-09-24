import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

class Quiz extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const routingSwitch = (total) => {
      const isCompleted = this.props.isCompleted;
      if (isCompleted) {
        return (
          <Link to="/completed">
            <Button
              id="nextQuestion"
              onClick={() => this.props.onClick(total)}
              color="success"
            >
              <span className="fa fa-forward fa-lg"></span> Go TO Result Page
            </Button>
          </Link>
        );
      } else {
        return (
          <Link to={`/question/${this.props.id}`}>
            <Button
              id="nextQuestion"
              onClick={() => this.props.onClick(total)}
              color="secondary"
            >
              <span className="fa fa-forward fa-lg"></span> Next Question
            </Button>
          </Link>
        );
      }
    };

    const options = (cleanedIncorrectAnswerData, cleanedCorrectAnswerData) => {
      let newOps = cleanedIncorrectAnswerData;
      console.log(newOps);
      newOps.push(cleanedCorrectAnswerData);

      let res = newOps.sort(function () {
        return 0.5 - Math.random();
      });
      let randomArr = res.slice(newOps, 4);
      const viewOps = randomArr.map((suffledOps, index) => {
        console.log(suffledOps);
        return (
          <div key={index} className="col-sm-6 mt-5">
            <div className="card questionCard">
              <div className="card-body">
                <div className="card-title"> {suffledOps} </div>
              </div>
            </div>
          </div>
        );
      });

      return <div className="row">{viewOps}</div>;
    };

    const selectLevel = (selected) => {
      let difficulty = selected.difficulty;

      if (difficulty === "easy") {
        return (
          <div>
            <span className="fa fa-star"></span>
            <span className="fa fa-star easy"></span>
            <span className="fa fa-star easy"></span>
            <span className="fa fa-star easy"></span>
            <span className="fa fa-star easy"></span>
          </div>
        );
      } else if (difficulty === "medium") {
        return (
          <div>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star easy"></span>
            <span className="fa fa-star easy"></span>
            <span className="fa fa-star easy"></span>
          </div>
        );
      } else if (difficulty === "hard") {
        return (
          <div>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star "></span>
            <span className="fa fa-star easy"></span>
            <span className="fa fa-star easy"></span>
          </div>
        );
      } else {
        return <div></div>;
      }
    };

    const cleanedQuestionData = (selected) => {
      const quesrRe = /%\d\d/;
      let question = selected.question.split(quesrRe);
      const re = /%\dF/;
      const cleanedQuestion = [];
      question.map((ques) => {
        let splitted = ques.split(re)[0];
        cleanedQuestion.push(splitted);
      });
      let strCleanedQues = cleanedQuestion.join(" ");

      return strCleanedQues;
    };

    const cleanedCategoryData = (selected) => {
      const quesrRe = /%\d\d/;
      let category = selected.category.split(quesrRe);
      const re = /%\dA/;
      const cleanedCategory = [];
      category.map((cat) => {
        let splitted = cat.split(re)[0];
        cleanedCategory.push(splitted);
      });
      let strCleanedCat = cleanedCategory.join(" ");
      return strCleanedCat;
    };

    const cleanedCorrectAnswerData = (selected) => {
      const re = /%\d\d/;
      let corrctAnswer = selected.correct_answer.split(re);
      let strCorrectAnswer = corrctAnswer.join(" ");
      return strCorrectAnswer;
    };

    const cleanedIncorrectAnswerData = (selected) => {
      const re = /%\d\d/;
      const op1 = selected.incorrect_answers[0];
      const op2 = selected.incorrect_answers[1];
      const op3 = selected.incorrect_answers[2];

      let opsArr = [];
      if (op1 && op2 && op3) {
        let incorrect = (option) => {
          let splitted = option.split(re);
          let strIncorrect = splitted.join(" ");
          opsArr.push(strIncorrect);
        };

        incorrect(op1);
        incorrect(op2);
        incorrect(op3);

        return opsArr;
      } else {
        opsArr.push(op1);
        return opsArr;
      }
    };

    const currentQuestion = () => {
      const selected = this.props.selected;
      const total = this.props.total;
      const params = this.props.params;
      const currentQuestNum = parseInt(params) + 1;
      cleanedQuestionData(selected);
      cleanedCategoryData(selected);
      cleanedCorrectAnswerData(selected);
      cleanedIncorrectAnswerData(selected);

      return (
        <div>
          <Card id="questionCard" className="mt-5">
            <CardTitle>
              <h1>
                Question {currentQuestNum} of {total}
              </h1>
            </CardTitle>
            <CardSubtitle>{cleanedCategoryData(selected)} </CardSubtitle>
            {selectLevel(selected)}
            <div className="mt-5">
              <h5> {cleanedQuestionData(selected)} ? </h5>
            </div>
            {options(
              cleanedIncorrectAnswerData(selected),
              cleanedCorrectAnswerData(selected)
            )}
            {routingSwitch(total)}
          </Card>
        </div>
      );
    };

    return <div className="container">{currentQuestion()}</div>;
  }
}

export default Quiz;
