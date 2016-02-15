const React = require('react');
const types = React.PropTypes;
const cx = require('classnames');

class kanjiblob extends React.Component {
    render() {
        const {kanji,hiragana,romaji,english,title} = this.props.kanjiBlob;
        const classNames = cx('blob', (title === 'true') ? 'title col-xs-4' : 'col-xs-3');
        return (
            <div className={classNames}>
                <div className={cx('kanji', (this.props.store.displayKanji !== true) ? 'hidden' : '') }>{kanji}</div>
                <div className={cx('romaji', (this.props.store.displayRomaji !== true) ? 'hidden' : '') }>{romaji}</div>
                <div
                    className={cx('english', (this.props.store.displayEnglish !== true) ? 'hidden' : '') }>{english}</div>
                <div
                    className={cx('hiragana', (this.props.store.displayHiragana !== true) ? 'hidden' : '') }>{hiragana}</div>
            </div>
        );
    }
}

kanjiblob.propTypes = {
    kanjiBlob: types.object.isRequired,
    store: types.object.isRequired,
};

module.exports = kanjiblob;