import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const {loginWithRedirect} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={loginWithRedirect}>Login / Sign up</button>
        <p>
          NewsNexus is a group project for class COEN275 - Object-Oriented Analysis, Design and Programming.
          Experience the world of news like never before with NewsNexus, 
          the ultimate destination for up-to-the-minute updates and analysis from around 
          the globe. Our sleek and intuitive platform brings you curated content from top sources, 
          covering everything from breaking news to in-depth features.
          With NewsNexus, you can stay informed and ahead of the curve with just a few clicks.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default Login;
