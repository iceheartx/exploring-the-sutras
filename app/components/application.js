const Bootstrap = require('../bootstrap');
const React = require('react');
const types = React.PropTypes;
const useStore = require('./use_store');

class Application extends React.Component {
  static propTypes = {
    store: types.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div className="page">
            Welcome
        </div>
    );
  }
}

Bootstrap.init(useStore(Application));

module.exports = useStore(Application);
