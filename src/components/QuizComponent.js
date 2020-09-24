import React , { Component }from "react";
import { Link } from "react-router-dom";
import { Button , Card , CardBody , CardHeader , CardTitle , CardText  , CardSubtitle } from 'reactstrap';

class Quiz extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {

    const cleanedQuestionData = (selected) => {
      const quesrRe = /%\d\d/          
      let question = selected.question.split(quesrRe)
      const re = /%\dF/;
      const cleanedQuestion = [];
      question.map( (ques) => {
         let splitted = ques.split(re)[0];
         cleanedQuestion.push(splitted);
        })
       let strCleanedQues = cleanedQuestion.join(" ");
        console.log(strCleanedQues);

        return strCleanedQues;
    }

    const cleanedCategoryData =(selected) => {

      const quesrRe = /%\d\d/          
      let category = selected.category.split(quesrRe)
      const re = /%\dA/;
      const cleanedCategory = [];
      category.map( (cat) => {
         let splitted = cat.split(re)[0];
         cleanedCategory.push(splitted);
        })
       let strCleanedCat = cleanedCategory.join(" ");
        console.log(strCleanedCat);
    }


    const cleanedCorrectAnswerData = (selected) => {
      const re = /%\d\d/;
      let corrctAnswer = selected.correct_answer.split(re);
      let strCorrectAnswer = corrctAnswer.join(" ");
      console.log(strCorrectAnswer);

    }


    const cleanedIncorrectAnswerData = (selected) => {
      const re = /%\d\d/;
      const op1 = selected.incorrect_answers[0];
      const op2 = selected.incorrect_answers[1];
      const op3 = selected.incorrect_answers[2];

      if(op1 && op2 && op3 ){
        let incorrect = (option) => {
          let splitted = option.split(re);
          let strIncorrect = splitted.join(" ");
          console.log(strIncorrect);
        }

        incorrect(op1);
        incorrect(op2);
        incorrect(op3);
      }
      else{
        return(
          <div></div>
        )
      }
    

     
      
    }

    const currentQuestion = () => {
      const selected = this.props.selected;
      const total = this.props.total;
      const params = this.props.params;
      cleanedQuestionData(selected);
      cleanedCategoryData(selected);
      cleanedCorrectAnswerData(selected);
      cleanedIncorrectAnswerData(selected);
  

      return(
        <div>
          <Card className="mt-5">
            <CardTitle > <h1>  Question { params } of { total }  </h1></CardTitle>
            <CardSubtitle >{ selected.category} </CardSubtitle>
            <CardText > {  cleanedQuestionData(selected)} </CardText>
          </Card>
        </div>
      )
    
    } 
    



    return(
      <div className="container">
        {currentQuestion()}
      </div>
    )
  }
}

export default Quiz;
