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

<<<<<<< HEAD
export const submitFeedback = (pace) =>
  db.ref('Course').set({
	pace,
  });
=======
export const onceGetProfs = () =>
  db.ref('profs').once('value');

export const onceGetStudents = () =>
  db.ref('students').once('value');
>>>>>>> 26b61cd8565f6ac7919b053406ffbd9d54265e63
