import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, update} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyAcWcoyb0lJdVqHxcLwMx5XusxB3rfu3x8",
  authDomain: "a-gelada-eb4f3.firebaseapp.com",
  databaseURL: "https://a-gelada-eb4f3-default-rtdb.firebaseio.com",
  projectId: "a-gelada-eb4f3",
  storageBucket: "a-gelada-eb4f3.appspot.com",
  messagingSenderId: "485720977123",
  appId: "1:485720977123:web:0bff0c5e0909411a299fd6",
  measurementId: "G-T7PXD9BEHL",
};
const app = initializeApp(firebaseConfig);

//Para deletar é so passar dado "null"
const db = getDatabase();
const updates = {};
updates['/AlunoNovo'] = null;
update(ref(db), updates);