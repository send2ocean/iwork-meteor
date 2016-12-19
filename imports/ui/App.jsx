import AppBar from './components/appBar.js';
import AccountsUIWrapper from './AccountsUIWrapper.jsx'
export const MainLayout = React.createClass({
 render() {
   return (
     <div>
       <AppBar/>
     </div>
   );
 }
});
export const BlogHome = React.createClass({
  render() {
    return (
      <div>
        <p>This is the home page of our blog</p>
        <p>
          <a href="/hello-world">See Hello World Post</a>
        </p>
      </div>
    );
  }
});
export const BlogPost = React.createClass({
  render() {
    return (
      <div>
        <p>
          <a href="/">Back</a> <br/>
          This is a single blog post
        </p>
      </div>
    );
  }
});
export const LogIn = React.createClass({
  render() {
    return (
      <div>
        <p>
          <a href="/">Back</a> <br/>
          This is a Login body!<br/>
          <AccountsUIWrapper/>
        </p>
      </div>
    );
  }
});
