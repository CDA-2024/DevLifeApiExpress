export class EmployeeCompagny {
  constructor(
    public id: number,
    public id_employee: number,
    public id_compagny: number,
    public isavalaible: boolean,
    public experience: number,
    public created_at: Date,
    public updated_at: Date,
    public is_deleted: boolean
  ) {}
}
