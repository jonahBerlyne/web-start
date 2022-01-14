/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

// This is my config info from my firebase settings:
const config = {
  apiKey: "AIzaSyDdlefJsqAAKGZoIr5Lv-0eFtapWPetJdo",
  authDomain: "friendlychat-2cc23.firebaseapp.com",
  projectId: "friendlychat-2cc23",
  storageBucket: "friendlychat-2cc23.appspot.com",
  messagingSenderId: "83524701382",
  appId: "1:83524701382:web:d943894bc41a00f8cd1bc7"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}