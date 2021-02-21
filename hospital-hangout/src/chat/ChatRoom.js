import React, { useRef, useState } from 'react';
import firebase from '../firebase'
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const auth = firebase.auth();
const firestore = firebase.firestore();

//general chat
function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});
    
    const [formValue, setFormValue] = useState('');
    
    const sendMessage = async(e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
        setFormValue('');
        dummy.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <div>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
                <div ref={dummy}> </div>
            </div>
            <form onSubmit={sendMessage}>
               <input value={formValue} onChange={(e)=>setFormValue(e.target.value)}/> 
               <button type="submit" disabled={!formValue}> </button>
            </form>
        </>
    )
}

function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} />
            <p> {text} </p>
        </div>
    )
}

export default ChatRoom;