const React = require('react');

class splash extends React.Component {
    render() {
        return (
            <div className="splash">
                <h1>Exploring the Sutras</h1>
                <p>When I came to visit the San Francisco Zen Center, one of the first things that intrigued me was chanting practice. We chanted the Heart Sutra in English and it spoke to a part of me that I couldn't even identify. The next day, I came back to do it again, and I really haven't left since.</p>
                <p>As I spent more time at the Zen center i found an appreciation for other sutras, and a desire to engage with them in different ways.</p>
                <p>This site is my attempt to explore the sutras, the meanings and uses of the sutras I chant every day.</p>
                <h2></h2>
                <p>To get started click on the <span className="logo-button">献立</span> button in the top left of the site to get started</p>
            </div>
        );
    }
}

module.exports = splash;