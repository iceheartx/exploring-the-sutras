const Bootstrap = require('../bootstrap');
const React = require('react');
const types = React.PropTypes;


const useStore = require('./use_store');

const Header = require('./header');


const Sutra = require('./sutra.js');
const Splash = require('./splash.js');
let content;

class Application extends React.Component {

    static propTypes = {
        store: types.object.isRequired,
        view: types.string
    };

    updateStore = function (callback) {
        this.setState({store: callback(this.state)});
    }.bind(this);

    getStore = function () {
        return this.state;
    }.bind(this);

    setStoreVal(key, val) {
        this.updateStore(store => {
            store[key] = val;
            return store;
        });
    }

    setView() {
        const view = this.state.view || 'splash';
        const state = this.state;
        switch (view) {
            case 'splash':
                content = <div className="row"><Splash /></div>;
                break;
            case 'sutra':
                if (this.state.sutra) {
                    const kanjiblobData = require('./../sutras/' + this.state.sutra + '.js');
                    content = <div className="row"><Sutra {...{kanjiblobData, store: state}} /></div>;
                } else {
                    content='';
                }

                break;
            default:
                content = '';
                break;
        }
        this.forceUpdate();
    }

    onChangeSutra = function (event) {
        if (event.currentTarget.type === 'checkbox') {
            this.setStoreVal(event.currentTarget.name, event.currentTarget.checked);
        } else {
            this.setStoreVal(event.currentTarget.name, event.currentTarget.value);
        }
        if (this.state.sutra) {
            this.setStoreVal('view', 'sutra');
            this.setView();
        }
    }.bind(this);

    constructor(props, context) {
        super(props, context);
        this.state = props.store;

        this.setView();
    };

    render() {

        const store = this.props;
        return (
            <div className="page">
                <Header {...{store, onChangeSutra: this.onChangeSutra}} />
                <div className="container">
                    {content}
                </div>
            </div>
        );
    };
}

Bootstrap.init(useStore(Application));

module.exports = useStore(Application);
