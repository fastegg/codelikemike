import * as React from 'react';
import { history, go } from './navigation';
import { Location, Action } from 'history';

interface RouterState {
  location: Location,
  action: Action,
}

export class Router extends React.Component<{}, {location:Location, action: Action}> {
  state: RouterState = {
    location: history.location,
    action: history.action,
  };
  unlisten: () => void;
  componentDidMount() {
    this.unlisten = history.listen((location, action) => {
      this.setState({location, action})
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  goToHome = () => {
    go('');
  }

  goToBlog = () => {
    go('/blog');
  }

  goToAbout = () => {
    go('/about');
  }

  goToContact = () => {
    go('/contact');
  }

  render() : JSX.Element {
    return <div>
      <div className="button" onClick={this.goToHome}>Home</div>
      <div className='button' onClick={this.goToAbout}>About</div>
      <div className="button" onClick={this.goToBlog}>Blog</div>
      <div className='button' onClick={this.goToContact}>Contact</div>
      <div>this is the router speaking... the location is {this.state.location.pathname}</div>
    </div>;
  }
}