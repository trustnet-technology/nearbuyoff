export class MainCarouselModel {
  public heading: string;
  public color: string;
  public desc: string;
  public numSt: string;

  constructor(heading: string, color: string, desc: string, numSt: string) {
    this.heading = heading;
    this.color = color;
    this.desc = desc;
    this.numSt = numSt;
  }
}
