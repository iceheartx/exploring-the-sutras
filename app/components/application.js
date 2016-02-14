const Bootstrap = require('../bootstrap');
const React = require('react');
const types = React.PropTypes;

const useStore = require('./use_store');

const Header = require('./header');
const Kanjiblob = require('./kanjiblob.js');

class Application extends React.Component {
    static propTypes = {
        store: types.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const store = this.props;
        let kanjiBlob = {
            kanji: '心',
            romaji: 'shin',
            hiragana: 'しん',
            english: 'heart'
        };
        return (
            <div className="page">
                <Header {...{store}} />
                <div className="container">
                    <div className="row">
                    <Kanjiblob {...kanjiBlob} />
                    </div>
                </div>
            </div>
        );
    }
}

Bootstrap.init(useStore(Application));

module.exports = useStore(Application);
