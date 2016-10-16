import React from 'react';
import {DoRequest} from './ajax';
import Styles from './styles.less';

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
      <div className={Styles.groovy__container}>
        <div className={ Styles.groovy__message }>hhhohoh</div>
        <div className={ Styles.groovy__message }>#Yolo swag!</div>

        { this.state.error && <div className={Styles.groovyerror}>An error occurred :(</div> }

        { this.state.groovythings &&
          <div className={Styles.groovy__things}>
            {this.state.groovythings.map(item =>
              <div>
                <div className={ Styles.groovy__thing }>{item.thing}</div>
                <div className={ Styles.groovy__thing }>{item.reason}</div>
              </div>
            )}
        </div>
        }
      </div>
    );
  }
}

export default App;
