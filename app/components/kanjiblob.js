const React = require('react');
const types = React.PropTypes;
const cx = require('classnames');

class kanjiblob extends React.Component {
    render() {
        const {kanji, hiragana, romaji, english, key} = this.props.kanjiBlob;
        const classNames = cx('blob');
        return (
            <div className={classNames}>
                <div className={cx('kanji', (this.props.store.displayKanji !== true) ? 'hidden' : '') }>
                    <a href={'https://en.wiktionary.org/wiki/' + kanji + '#Japanese'}
                       target="new">{kanji}</a></div>
                <div className={cx('meta', (this.props.store.displayCharacterNum !== true
                    && this.props.store.displayCharacterNum !== true
                    && this.props.store.displayRomaji
                    && this.props.store.displayEnglish
                    && this.props.store.displayHiragana
                ) ? 'hidden' : '')}>
                    <div className={cx('characterNum', (this.props.store.displayCharacterNum !== true) ? 'hidden' : '') }>{key}</div>
                    <div className={cx('romaji', (this.props.store.displayRomaji !== true) ? 'hidden' : '') }>{romaji}</div>
                    <div className={cx('english', (this.props.store.displayEnglish !== true) ? 'hidden' : '') }>{english}</div>
                    <div className={cx('hiragana', (this.props.store.displayHiragana !== true) ? 'hidden' : '') }>{hiragana}</div>
                </div>
            </div>
        );
    }
}

kanjiblob.propTypes = {
    kanjiBlob: types.object.isRequired,
    store: types.object.isRequired,
};

module.exports = kanjiblob;