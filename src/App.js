import React, {useState, useRef} from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import './image/hscapture.PNG';
import video from './image/hsvideo.mp4';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';



firebase.initializeApp({

  apiKey: "AIzaSyDC-t3PkHigOP1qK4nLoarF-erOEtOoN5E",
  authDomain: "here-story.firebaseapp.com",
  projectId: "here-story",
  storageBucket: "here-story.appspot.com",
  messagingSenderId: "996048014712",
  appId: "1:996048014712:web:aa098a7753ab08476d8c8d",
  measurementId: "G-NGS18708MW"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


const MainPage = () => {
  return (<h1>Hello User!</h1>)
}

const SignIn = () => {

  const signInWithGoogle = () =>{
    const provider =  new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
<>
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">HEREstory</a>
        </div>
        <ul className="nav navbar-nav navbar-right">

          <li><a onClick={signInWithGoogle}><span className="glyphicon glyphicon-log-in"></span> Sign Up</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>

        </ul>
      </div>
    </nav>
    <div id="text">
        <h1>HEREstory</h1><br/>
        <p>Discover the history near you</p>
    </div>
  <video id="videoBG" poster="./image/hscapture.PNG" autoPlay muted loop>
    <source src={video} type="video/mp4"/>
  </video>

</>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}> Sign Out</button>
  )
}

function App() {
  const [ user ] =  useAuthState(auth);

  return (
    
      <div className="App">
        <header>
          <SignOut />
        </header>
        <section>
          {user ? <MainPage/>  : <SignIn/>}
        </section>
      </div>

  );
}

export default App;
