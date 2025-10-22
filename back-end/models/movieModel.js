import db from '../db/connection.js';

export const createMovie = async (movie) => {
  const { title, genre, type, release_year, description, user_id } = movie;
  const [result] = await db.query(
    "INSERT INTO movies (title, genre, type, release_year, description, user_id) VALUES (?, ?, ?, ?, ?, ?)",
    [title, genre, type, release_year, description, user_id]
  );
  return result;
};

export const getMoviesByUser = async (user_id) => {
  const [rows] = await db.query(
    "SELECT * FROM movies WHERE user_id = ?",
    [user_id]
  );
  return rows;
};

export const updateMovie = async (id, movie, user_id) => {
  const { title, genre, type, release_year, description } = movie;
  const [result] = await db.query(
    "UPDATE movies SET title = ?, genre = ?, type = ?, release_year = ?, description = ? WHERE id = ? AND user_id = ?",
    [title, genre, type, release_year, description, id, user_id]
  );
  return result;
};

export const deleteMovie = async (id, user_id) => {
  const [result] = await db.query("DELETE FROM movies WHERE id = ? AND user_id = ?", [id, user_id]);
  return result;
};