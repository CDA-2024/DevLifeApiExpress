export class Budget {
  constructor(
    public id: number,
    public id_company: number,
    public revenus: number,
    public depenses: number,
    public benefices: number,
    public createdAt: Date,
    public updateAt: Date
  ) {}
}
