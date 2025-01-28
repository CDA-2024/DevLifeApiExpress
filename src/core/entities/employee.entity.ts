export class Employee {
  constructor(
    public id: number,
    public name: string,
    public id_skill: number, 
    public salary: number, 
    public createdAt: Date, 
    public updatedAt: Date,
    public isDeleted: boolean
  ) {}
}