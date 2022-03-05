export class Speaker {
  _id: number;
  name: string;
  image: string;
  address: string;
  birthdate: Date;
  hourRate: number;
  isMarried: boolean;
  government: string;
  rating: number;

  constructor(
    _id: number,
    name: string,
    image: string,
    address: string,
    birthdate: Date,
    hourRate: number,
    isMarried: boolean,
    government: string,
    rating: number
  ) {
    this._id = _id;
    this.name = name;
    this.image = image;
    this.address = address;
    this.birthdate = birthdate;
    this.hourRate = hourRate;
    this.isMarried = isMarried;
    this.government = government;
    this.rating = rating;
  }
}
