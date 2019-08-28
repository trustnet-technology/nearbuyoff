export class MainCarouselModel {
  public heading: string;
  public color: string;
  public url: string;
  public numSt: string;

  constructor(heading: string, color: string, desc: string, numSt: string) {
    this.heading = heading;
    this.color = color;
    this.url = desc;
    this.numSt = numSt;
  }
}
