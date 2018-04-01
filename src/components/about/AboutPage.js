// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
            </div>
        );
    }
}

export default AboutPage;
