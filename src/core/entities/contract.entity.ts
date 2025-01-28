export class Contract {
  constructor(
    public id: number,
    public title: string,
    public type: string,
    public imageUrl: string,
    public description: string,
    public reward: number,
    public difficultyLevel: number,
    public isDeleted: boolean,
    public createdAt: Date,
    public updateAt: Date
  ) {}
}
