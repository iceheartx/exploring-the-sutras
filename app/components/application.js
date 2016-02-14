const Bootstrap = require('../bootstrap');
const React = require('react');
const types = React.PropTypes;


const useStore = require('./use_store');

const Header = require('./header');

const kanjiblobData = require('./../sutras/heartsutra.js');
const Sutra = require('./sutra.js');
const Splash = require('./splash.js');


class Application extends React.Component {
    static propTypes = {
        store: types.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
        const view = props.view || 'splash';
        switch (view) {
            case 'splash':
                module = <div className="row"><Splash /></div>
                break;
            case 'sutra':
                module = <div className="row"><Sutra {...{kanjiblobData}} /></div>
                break;
            default:
                break
        }
    }

    render() {
        const store = this.props;
        return (
            <div className="page">
                <Header {...{store}} />
                <div className="container">
                    {module}
                </div>
            </div>
        );
    }
}

Bootstrap.init(useStore(Application));

module.exports = useStore(Application);
