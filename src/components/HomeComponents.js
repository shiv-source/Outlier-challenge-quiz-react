import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

   

    // const questions = this.props.questions.map( (question , index) => {
    //     return(
    //         <div key={index}>
    //            <p> {question.question} </p>
    //         </div>
    //     )
      
       
    // })


    return (
      
      <div>
        <Container>
          <Button color="success" size="lg" active>
            Start Test
          </Button>
          {/* {questions} */}
        </Container>
      </div>
    );
  }
}

export default Home;
