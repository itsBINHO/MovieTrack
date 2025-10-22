import { createMovie, getMoviesByUser, updateMovie, deleteMovie } from "../models/movieModel.js";

export const addMovie = async (req, res) => {
  try {
    const user_id = req.user.id;
    const newMovie = { ...req.body, user_id };
   await createMovie(newMovie);
   res.status(201).json({ message: "Conteúdo adicionado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar conteúdo.", error});
  }
};

export const getUserMovies = async (req, res) => {
  try {
    const user_id = req.user.id;
    const movies = await getMoviesByUser(user_id);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar conteúdos.", error });
  }
};

export const editMovie = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { id } = req.params;
    await updateMovie(id, req.body, user_id);
    res.status(200).json({ message: "Conteúdo atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar o conteúdo.", error });
  }
};

export const removeMovie = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { id } = req.params;
    await deleteMovie(id, user_id);
    res.status(200).json({ message: "Conteúdo excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir o Conteúdo.", error });
  }
};