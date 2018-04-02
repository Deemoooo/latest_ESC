import { db } from './firebase';

// User API

export const doCreateUser = (id, email, role) =>
  db.ref(`users/${id}`).set({
    email,
    role,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');