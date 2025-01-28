export class Company {
  constructor(
    public id: number,
    public id_user: number,
    public name: string,
    public experience: string,
    public createdAt: Date,
    public updateAt: Date
  ) {}
}
