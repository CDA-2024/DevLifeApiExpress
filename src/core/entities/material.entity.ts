export class Material {
  constructor(
    public id: number,
    public idMaterialSkill: number,
    public name: string,
    public type: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public updatedAt: Date,
    public isDeleted: boolean
  ) {}
}
