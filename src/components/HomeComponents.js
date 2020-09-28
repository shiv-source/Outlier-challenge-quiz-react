import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props){
    super(props);
    this.onResetResultOnStart = this.onResetResultOnStart.bind(this);
  }


  onResetResultOnStart(){
    localStorage.removeItem('userResult');

  }

  render() {
    const total = this.props.total;

    return (
      <div>
        <Container>
          <div className="btnPosition">
            <div className="row justify-content-md-center">
              <div id="startBtn" className="col col-lg-2 md-2">
                <Link to={`/question/${this.props.id}`}>
                  <Button
                    onClick={() => this.props.onClick(total)}
                    onClick={this.onResetResultOnStart}
                    color="success"
                    size="lg"
                    active
                  >
                    <span className="fa fa-play fa-lg"></span> Start Test
                  </Button>
                </Link>
              </div>
              <div id="resultBtn" className="col col-lg-3 md-2">
                <Link to="/result">
                  <Button color="success" size="lg" active>
                    <span className="fa fa-forward fa-lg"></span> Go To Result
                    Page
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
