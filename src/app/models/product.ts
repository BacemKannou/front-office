import { Category } from './category';

export class Product {
  public id: number;
  public name: string;

  constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
  }
}
