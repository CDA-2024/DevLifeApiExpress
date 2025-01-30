export class Company {
  constructor(
    public id: number,
    public id_user: number,
    public name: string,
    public experience: string,
    public created_at: Date,
    public updated_at: Date,
    public is_deleted: boolean
  ) {}
}
