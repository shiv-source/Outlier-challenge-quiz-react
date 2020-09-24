import React, { Component } from "react";
import { QUESTIONS } from "../shared/questions";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponents";
import Quiz from "./QuizComponent";
import RenderCompleted from './CompletedComponent'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: QUESTIONS,
      id : 0,
      isCompleted : false,
    };
  }




  selectQuestion(total) {
    let next = this.state.id +1;
    let lastItem = (parseInt( total) -1)

    if(next <= lastItem ) {
      
      this.setState({ id  : next });
      console.log(lastItem);
      console.log(this.state.id)

    }
    else if (this.state.id === lastItem) {
      this.setState({ isCompleted : true });
    }
   
    
  }


  render() {

    const SelectedQues = ({ match }) =>{
      const questions = this.state.questions;
      if(questions){

        const selected = questions.filter( (ques , index ) => index === parseInt(match.params.id,10))[0];
        const total = questions.length;
        const params = match.params.id;
      
        return(
            <Quiz selected={ selected } total = { total } params={params} id={ this.state.id} isCompleted={this.state.isCompleted} onClick={ () => this.selectQuestion(total)}/>
        )
      }
      else{
        return(
          <div>

          </div>
        )
      }
     
    }

    return (
      <div>
        <Header />
        <Switch>
             <Route path="/home" component={ () => <Home id={this.state.id} onClick={ () => this.selectQuestion(this.state.questions.length)}  total = { this.state.questions.length }/>} />
          <Route
            exact
            path="/question/:id"
            component={SelectedQues}
          />
          <Route path="/completed" component={RenderCompleted} />
            <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
