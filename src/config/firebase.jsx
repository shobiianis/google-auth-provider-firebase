import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCYX5Ymibm-FNPLJU8tQ-MayVK4wrUC_QU",
  authDomain: "todo-zenkoders.firebaseapp.com",
  projectId: "todo-zenkoders",
  storageBucket: "todo-zenkoders.appspot.com",
  messagingSenderId: "1073549547691",
  appId: "1:1073549547691:web:df98e51f6d2d3f793f7fee",
  measurementId: "G-EW4P3H4FZN"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)