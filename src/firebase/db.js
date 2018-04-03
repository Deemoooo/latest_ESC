import { db } from './firebase';

// User API

export const doCreateUser = (id, email, role, student, prof) =>{
	if (role === "Professor") {
		db.ref(`profs/${id}`).set({
    	email,
    	student,
  		});
	}else {
		db.ref(`students/${id}`).set({
    	email,
    	prof,
  		});
	}
}
  

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetProfs = () =>
  db.ref('profs').once('value');

export const onceGetStudents = () =>
  db.ref('students').once('value');