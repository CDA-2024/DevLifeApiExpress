export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string,
    public role: string,
    public is_tutorial_finished: boolean,
    public created_at: Date,
    public updated_at: Date,
    public is_deleted: boolean
  ) {}
}
