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
    public created_at: Date,
    public updated_at: Date,
    public is_deleted: boolean
  ) {}
}
