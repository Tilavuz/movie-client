import { ActorInterface, CategoryInterface, GenreInterface, RatingInterface } from "./short-interface";

export interface VideoInterface {
  _id: string;
  url: string;
  quality: string;
  format: string;
}

export interface MovieInterface {
  _id: string;
  rating: RatingInterface;
  genres: GenreInterface[];
  actors: ActorInterface[];
  video: VideoInterface;
  category: CategoryInterface;
  is_paid: boolean;
  duration: number;
  country: string;
  year: number;
  age_restriction: boolean;
}