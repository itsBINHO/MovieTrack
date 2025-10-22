import db from '../db.js';

export const createMovie = async (movie) => {
  const { title, genre, type, release_year, description, user_id } = movie;
  const [result] = await db.query(
    "INSERT INTO movies (title, genre, type, release_year, description, user_id) VALUES (?, ?, ?, ?, ?, ?)",
    [title, genre, type, release_year, description, user_id]
  );
  return result;
};