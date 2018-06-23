import * as React from 'react';
import { history, go } from './navigation';
import { Location, Action } from 'history';

interface RouterState {
  location: Location,
  action: Action,
}

export class Router extends React.Component<{}, {location:Location, action: Action}> {
  state: RouterState = {
    location: null,
    action: null,
  };
  unlisten: ()=>void;
  componentDidMount() {
    this.unlisten = history.listen((location, action) => {
      console.log(location, action);
      this.setState({location, action})
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  goToBlog = () => {
    go('/blog');
  }

  render() : JSX.Element {
    return <div>
      <div>this is the router speaking... the location is {this.state.location ? this.state.location.pathname : 'home'}</div>
      <div className="button" onClick={this.goToBlog}>go to the blog</div>
    </div>;
  }
}