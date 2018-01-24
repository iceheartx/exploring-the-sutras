const React = require('react');
const types = React.PropTypes;
const Kanjiblob = require('./kanjiblob');
const cx = require('classnames');

class sutra extends React.Component {
    render() {
        const {kanjiblobData, store} = this.props;
        return (
            <div className={cx(store.displayKanji ? 'sutra-container-kanji' : 'sutra-container')}>
                <div className={cx(store.displayKanji ? 'title-kanji' : 'title')}>
                    {kanjiblobData.title.map(function (kanjiBlob) {
                        kanjiBlob.title='true';
                        return <Kanjiblob {...{kanjiBlob, store}} />;
                    }, this)}
                </div>

                <div className={cx(store.displayKanji ? 'sutra-body-kanji' : 'sutra-body')}>
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