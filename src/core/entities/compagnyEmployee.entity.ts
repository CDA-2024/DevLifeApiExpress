
export class CompagnyEmployee {
  constructor(
    public id: number,
    public id_employee: number,
    public id_compagny: number,
    public isavalaible: boolean,
    public experience: number,
    public createdAt: Date,
    public updatedAt: Date,
    public isdeleted: boolean
  ) {}
}
