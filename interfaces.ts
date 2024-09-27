interface Movie {
  title: string;
  director: string;
  yearReleased: number;
  streaming: boolean;
  logReview?: ReviewLogger;
}

interface ReviewLogger {
  (review: string): void;
}

interface Person {
  name: string;
  email: string;
}

interface Director extends Person {
  numberOfMovies: number;
}

interface CastMember extends Person {
  role: String;
  rehearse: (sceneNumber: number) => void;
}

interface FavoriteItem {
  title: string;
}

interface FavoritesType<T> {
  add(item: T): void;
  remove(item: T): T | undefined;
  get(): T[];
}

export {
  Movie,
  ReviewLogger as Logger,
  Person,
  Director,
  CastMember,
  FavoriteItem,
  FavoritesType,
};
