export class CompanyContract {
  constructor(
    public id: number,
    public id_company: number,
    public id_contract: number,
    public deadline: Date,
    public is_accepted: boolean,
    public is_completed: boolean,
    public progress: number,
    public start_date: Date,
    public createdAt: Date,
    public updateAt: Date
  ) {}
}
