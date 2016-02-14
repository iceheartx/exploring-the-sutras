
const React = require('react');
const types = React.PropTypes;

class kanjiblob extends React.Component {
    render() {
        const {kanji,hiragana,romaji,english} = this.props;
        return (
            <div className="blob col-xs-4">
                <div className="kanji">{kanji}</div>
                <div className="romaji">{romaji}</div>
                <div className="hiragana">{hiragana}</div>
                <div className="english">{english}</div>
            </div>
        );
    }
}

kanjiblob.propTypes = {
    kanji: types.string.isRequired,
    hiragana: types.string.isRequired,
    romaji: types.string.isRequired,
    english: types.string.isRequired,
};

module.exports = kanjiblob;