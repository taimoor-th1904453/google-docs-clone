import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ModalComponent from './modalComponent'
import { addDoc, collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../login.css';

// import {app, auth, database, signInWithGoogle} from '../firebaseConfig'


export default function Login({ database }) {
    
    return (
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
            {/* <button onClick ={signInWithGoogle}>signInWithGoogle</button> */}
          </div>
        </form>
      </div>
    )
}