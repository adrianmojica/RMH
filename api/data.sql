-- username, password, first_name, last_name, therapist, email, is_admin

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL, 
  username TEXT NOT NULL PRIMARY KEY,
  therapist TEXT,
  is_admin TEXT,
  password TEXT NOT NULL,
);

