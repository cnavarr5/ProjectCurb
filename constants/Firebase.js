import * as firebase from 'firebase'
import 'firebase/firestore'

  export default async function getVendors(){
    let vendors = []
    const firebaseConfig = {
      // apiKey: "AIzaSyBg0zy3uO6zJQklKZuNZUI-s9Xw--frrcE",
      // authDomain: "curbq-67839.firebaseapp.com",
      // databaseURL: "https://curbq-67839.firebaseio.com",
      // projectId: "curbq-67839",
      // storageBucket: "curbq-67839.appspot.com",
      // messagingSenderId: "660168046999",
      // appId: "1:660168046999:web:fbb7b095353152f1ef2cd2",
      // measurementId: "G-RBP0C6G88G"
    };
    // Initialize Firebase
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig)
    }

    const dbh = firebase.firestore()
    dbh.collection('Vendors').get().then(query => {
      query.forEach(doc => {
        console.log(doc.data())
      })
    })
  }

  class Vendor {
    location
    name
    queue
  }