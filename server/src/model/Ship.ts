import { Stock } from "../interface/Stock";



export class Ship implements Stock{
    id:string
    urlImage:string
    valueNav:string

   
    constructor(id: string, urlImage: string, valueNav: string) {
        this.id = id;
        this.urlImage = urlImage;
        this.valueNav = valueNav;
      }
    
      /* makeSound(): void {
        console.log("Woof!");
      } */
      
    }
    

   