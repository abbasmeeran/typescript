import { Documentary, Favorites, Performer, Video } from "./classes";
import { Movie, Logger, CastMember } from "./interfaces";

import * as Utilities from "./functions";

//Promises

function getTitlesByDirector(director: string): Promise<string[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const titles: string[] = Utilities.GetTitles(director);
      if (titles.length) {
        res(titles);
      } else {
        rej("No movies found");
      }
    }, 2000);
  });
}

getTitlesByDirector("George Lucas")
  .then(
    (titles) => {
      console.log("=======Promise===========");
      titles.forEach((title) => console.log(title));
      return titles.length;
    },
    (reason) => 0
  )
  .then((numOfMovies) => console.log(`the director has ${numOfMovies} movies`))
  .catch((reason) => console.log("no movies found"));

//Async await

async function execute() {
  const titles: string[] = await getTitlesByDirector("George Lucas");
  console.log("=======async===========");
  titles.forEach((title) => console.log(title));
}

execute();

//Generics
console.log("=======Generics===========");
const movies: Movie[] = Utilities.GetAllMovies();

const favorites: Favorites<Movie> = new Favorites<Movie>();
favorites.add(movies[0]);
favorites.add(movies[1]);

favorites.get().forEach((f) => console.log(f.title));

favorites.remove(movies[1]);

favorites.get().forEach((f) => console.log(f.title));
