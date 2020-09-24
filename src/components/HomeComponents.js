import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends Component {

  render() {

   
    const total = this.props.total;

    return (
     
      
      <div>
        <Container>
          <div className="btnPosition"> 
        <Link to={`/question/${this.props.id}`}><Button onClick={() =>this.props.onClick(total)} color="success" size="lg" active> <span className="fa fa-play fa-lg"></span>   Start Test </Button>  </Link>
        </div>
        </Container>
      </div>
    );
  }
}

export default Home;
