const React = require('react');
const types = React.PropTypes;
const cx = require('classnames');

class kanjiblob extends React.Component {
    render() {
        const {kanji,hiragana,romaji,english,title} = this.props;
        const classNames = cx('blob',(title === 'true') ? 'title col-xs-5' : 'col-xs-3');
        return (
            <div className={classNames}>
                <div className="kanji">{kanji}</div>
                <div className="romaji">{romaji}</div>
                <div className="english">{english}</div>
                <div className="hiragana">{hiragana}</div>
            </div>
        );
    }
}

kanjiblob.propTypes = {
    kanji: types.string.isRequired,
    hiragana: types.string.isRequired,
    romaji: types.string.isRequired,
    english: types.string.isRequired,
    title: types.string
};

module.exports = kanjiblob;