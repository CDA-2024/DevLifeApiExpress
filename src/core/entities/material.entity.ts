export class Material {
  constructor(
    public id: number,
    public id_material_skill: number,
    public name: string,
    public type: string,
    public description: string,
    public image_url: string,
    public created_at: Date,
    public updated_at: Date,
    public is_deleted: boolean
  ) {}
}
