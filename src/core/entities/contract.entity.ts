export class Contract {
  constructor(
    public id: number,
    public title: string,
    public type: string,
    public image_url: string,
    public description: string,
    public reward: number,
    public difficulty_level: number,
    public is_deleted: boolean,
    public created_at: Date,
    public updated_at: Date
  ) {}
}
