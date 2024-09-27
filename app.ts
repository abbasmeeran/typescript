import { Documentary, Performer, Video } from "./classes";
import { Movie, Logger, CastMember } from "./interfaces";

import * as Utilities from "./functions";

console.log(Utilities.GetTitles("Irvin Kershner", true));

function CreateMovieId(title: string, id: number): string {
  return title + id;
}

let IdGenerateor: (chars: string, id: number) => string;
IdGenerateor = CreateMovieId;

let newId: string = IdGenerateor("Jedi", 20);

console.log(newId);

const myMovie: Movie = {
  title: "The Force Awakens",
  director: "J.J. Abrams",
  yearReleased: 2015,
  streaming: false,
  logReview: (review: string) => console.log("Review : " + review),
};

Utilities.PrintMovieInfo(myMovie);

myMovie.logReview("its classic!!");

const myPerformer = new Performer();
myPerformer.name = "Abbas";

myPerformer.rehearse(23);

const doc = new Documentary("Horrible", 2009, "ITs classic");
doc.producer = "Abbas";
doc.printInfo();

doc.printCritic();

const Musical = class extends Video {
  printCritic(): void {
    console.log("It is wonderful");
  }
};

const m = new Musical("Super", 2003);
m.producer = "Basim";
m.printInfo();
