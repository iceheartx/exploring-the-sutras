const React = require('react');
const types = React.PropTypes;
const Kanjiblob = require('./kanjiblob');

class sutra extends React.Component {
    render() {
        const {kanjiblobData, store} = this.props;
        return (
            <div>
                <div className="row title">
                    {kanjiblobData.title.map(function (kanjiBlob) {
                        kanjiBlob.title='true';
                        return <Kanjiblob {...{kanjiBlob, store}} />;
                    }, this)}
                </div>

                <div className="row">
                    {kanjiblobData.sutra.map(function (kanjiBlob) {
                        return <Kanjiblob {...{kanjiBlob, store}} />;
                    }, this)}
                </div>
            </div>
        );
    }
}

sutra.propTypes = {
    kanjiblobData: types.object.isRequired,
    store: types.object.isRequired
};

module.exports = sutra;