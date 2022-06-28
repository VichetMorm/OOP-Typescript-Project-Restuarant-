export class DateTime {
  constructor(
    public hour:number,
    public minut:number,
    public day: number,
    public month: number,
    public year: number,
  ) {}

  isEqual(other: DateTime): boolean {
    if (
      this.hour === other.hour &&
      this.minut=== other.minut &&
      this.day === other.day &&
      this.month === other.month &&
      this.year === other.year
    ){
      return true
    }else{return false}
  }
}
