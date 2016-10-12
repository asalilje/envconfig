import React from 'react';
import {DoRequest} from './ajax';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      error: null,
      groovythings: null
    };

  }

  componentDidMount() {
    DoRequest("GET", config.apiUrl)
      .then(data => {
        const result = JSON.parse(data);
        if (result && result.swaglist) {
          this.setState ({
            groovythings: result.swaglist
          });
        }

      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }

  render() {
    return (
      <div>
        <div className="groovymessage">#Yolo swag!</div>

        { this.state.error && <div className="groovyerror">An error occurred :(</div> }

        { this.state.groovythings &&
          <div className="groovythings">
            <div className="groovyitem">
            {this.state.groovythings.map(item =>
              <div className="groovyitem">
                <div className="groovything">{item.thing}</div>
                <div className="groovyreason">{item.reason}</div>
              </div>
            )}
          </div>
        </div>
        }
      </div>
    );
  }
}

export default App;
