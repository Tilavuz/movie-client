import { ActorInterface, CategoryInterface, GenreInterface, RatingInterface } from "./short-interface";

export interface MovieInterface {
  _id: string;
  rating: RatingInterface;
  genres: GenreInterface[];
  actors: ActorInterface[];
  video: string;
  category: CategoryInterface;
  is_paid: boolean;
  duration: number;
  country: string;
  year: number;
  age_restriction: boolean;
  title: string;
  photo: string;
  big_photo: string;
}