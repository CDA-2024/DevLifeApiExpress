export class Budget {
  constructor(
    public id: number,
    public id_company: number,
    public revenus: number,
    public depenses: number,
    public benefices: number,
    public created_at: Date,
    public updated_at: Date,
    public is_deleted: boolean
  ) {}
}
