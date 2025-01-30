export class Employee {
  constructor(
    public id: number,
    public name: string,
    public id_skill: number,
    public salary: number,
    public created_at: Date,
    public updated_at: Date,
    public is_deleted: boolean
  ) {}
}
