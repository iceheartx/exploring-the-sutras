
const React = require('react');
const types = React.PropTypes;

const LogoBar = () => (
  <div className="logo-bar">
    <a href="/"><img {...{src: 'images/shin-red.png'}}/></a>
  </div>
);


class Header extends React.Component {
  render() {
      const {store: {}} = this.props;
    return (
      <header>
        <LogoBar />
      </header>
    );
  }
}

Header.propTypes = {
  store: types.object.isRequired
};

module.exports = Header;