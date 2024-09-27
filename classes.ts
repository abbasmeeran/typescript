import { CastMember, FavoriteItem, FavoritesType } from "./interfaces";

export class Performer implements CastMember {
  name = "";
  email = "";
  role = "";
  rehearse(sceneNumber: number) {
    console.log(`${this.name} is performing the scene ${sceneNumber}`);
  }
}

export abstract class Video {
  private _producer: string = "";
  constructor(public title: string, protected year: number) {}

  set producer(producer: string) {
    this._producer = producer;
  }

  get producer() {
    return this._producer;
  }

  public printInfo() {
    console.log(
      `${this.producer} of ${this.title} has released in ${this.year}`
    );
  }

  abstract printCritic(): void;
}

export class Documentary extends Video {
  constructor(newTitle: string, newYear: number, public subject: string) {
    super(newTitle, newYear);
  }

  public printInfo() {
    super.printInfo();
    console.log(`${this.subject} (${this.year})`);
  }

  printCritic(): void {
    console.log("Its horrible movie");
  }
}

export class Favorites<T extends FavoriteItem> implements FavoritesType<T> {
  _favorites: T[] = new Array<T>();

  constructor() {}
  get(): T[] {
    return this._favorites;
  }

  public add(item: T) {
    this._favorites.push(item);
  }

  public remove(item: T): T | undefined {
    const index = this._favorites.findIndex((i) => i.title === item.title);
    if (index != -1) {
      return this._favorites.splice(index, 1)[0];
    }
  }
}
