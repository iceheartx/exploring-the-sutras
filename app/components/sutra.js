const React = require('react');
const types = React.PropTypes;
const Kanjiblob = require('./kanjiblob');

class sutra extends React.Component {
    render() {
        const kanjiblobData = this.props.kanjiblobData;
        return (
            <div>
                {kanjiblobData.sutra.map(function(kanjiBlob){
                return <Kanjiblob {...kanjiBlob} />;
            })}
            </div>
        );
    }
}

sutra.propTypes = {
    kanjiblobData: types.object.isRequired
};

module.exports = sutra;