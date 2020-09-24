import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {

   
    const total = this.props.total;

    return (
     
      
      <div>
        <Container>
        <Link to={`/question/${this.props.id}`}><Button onClick={() =>this.props.onClick(total)} color="success" size="lg" active>   Start Test </Button>  </Link>
         
        </Container>
      </div>
    );
  }
}

export default Home;
