import { MovieInterface } from "./movie-interface";

export interface ReviewInterface {
  _id: string;
  points: number;
  message: string;
}

export interface RatingInterface {
  _id: string;
  reviews: ReviewInterface[];
  score: number;
}

export interface GenreInterface {
  _id: string;
  type: string;
}

export interface ActorInterface {
  _id: string;
  name: string;
  photo: string;
}

export interface PlaylistInterface {
  _id: string;
  user: string;
  movies: MovieInterface
}

export interface WatchInterface {
  _id: string;
  user: string;
  movie: MovieInterface;
  last_time: number
}

export interface EpisodePartInterface {
  _id: string;
  title: string;
  movie: MovieInterface;
}

export interface EpisodeInterface {
  _id: string;
  episode_parts: EpisodePartInterface[];
  title: string;
  type: 'kino' | 'serial';
}

export interface CategoryInterface {
  _id: string;
  name: string;
}