import React from 'react';


class MainLayout extends React.PureComponent{
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">SMDbox</a>
                        </div>
                    </div>
                </nav>
                {this.props.content}
            </div>
        )
    }
}

export default MainLayout;
