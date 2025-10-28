import { createMovie, getMoviesByUser, updateMovie, deleteMovie } from "../models/movieModel.js";

export const addMovie = async (req, res) => {
  try {
    const movie = { ...req.body, user_id: req.user.id };
    const result = await createMovie(movie);
    res.status(201).json({ message: "Filme/série/adicionado com sucesso!", id: result.insertId });
  } catch (error) {
    console.error("Erro ao adicionar:", error);
    res.status(500).json({ message: "Erro ao adicionar filme/série/anime" });
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
    const { id } = req.params;
    const result = await updateMovie(id, req.body, req.user.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Filme não encontrado ou sem permissão" });
    }
    res.status(200).json({ message: "Filme atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    res.status(500).json({ message: "Erro ao atualizar filme/série/anime" });
  }
};

export const removeMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteMovie(id, req.user.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Filme não encontrado ou sem permissão" });
    }
    res.status(200).json({ message: "Filme removido com sucesso!" });
  } catch (error) {
    console.error("Erro ao excluir:", error);
    res.status(500).json({ message: "Erro ao excluir filme/série/anime" });
  }
};