const cx = require('classnames');
const React = require('react');
const types = React.PropTypes;

class LogoBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={cx('row', 'logo-bar', (this.props.expandedMenu) ? 'expanded' : '' )}>
                <div className="col-xs-3"><a href="/" className="logo-button" onClick={this.props.onClick}>献立</a></div>
                {this.props.expandedMenu && <div className="col-xs-18">
                    <div className="col-xs-8">
                        <fieldset>
                            <legend>Select a Sutra</legend>
                            <select>
                                <option>
                                    Select One
                                </option>
                                <optgroup label="Maka Hannya Haramitta Shin Gyo">
                                    <option value="yes">Heart of Great Perfect Wisdom Sutra</option>
                                </optgroup>
                                <optgroup label="Sandokai">
                                    <option value="yes">Harmony of Difference and Equality</option>
                                </optgroup>
                                <optgroup label="Hokyo Zammai">
                                    <option value="yes">Song of the Jewel Mirror Samadhi</option>
                                </optgroup>
                            </select>
                        </fieldset>
                    </div>
                    <div className="col-xs-8">
                        <fieldset>
                            <legend>Display</legend>
                            <label>
                                <input type="checkbox"/>Kanji
                            </label>
                            <label>
                                <input type="checkbox"/>Hiragana
                            </label>
                            <label>
                                <input type="checkbox"/>Romaji
                            </label>
                            <label>
                                <input type="checkbox"/>English
                            </label>
                            <label>
                                <input type="checkbox"/>Character #
                            </label>
                        </fieldset>
                    </div>
                    <div className="col-xs-7">
                        <fieldset>
                            <legend>Layout</legend>
                            <label>
                                <input type="radio"/>English
                            </label>
                            <label>
                                <input type="radio"/>Kanji
                            </label>

                        </fieldset>
                    </div>
                </div>
                }
            </div>
        );
    }
}
LogoBar.propTypes = {
    onClick: types.func.isRequired,
    expandedMenu: types.bool
};


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedMenu: false
        };

    }

    toggleExpandMenu = (event) => {
        event.preventDefault();
        this.setState({expandedMenu: !this.state.expandedMenu});
    }

    render() {
        const {store: {}} = this.props;
        return (
            <header>
                <LogoBar {...{expandedMenu: this.state.expandedMenu, onClick: this.toggleExpandMenu}} />
            </header>
        );
    }
}

Header.propTypes = {
    store: types.object.isRequired
};

module.exports = Header;