import { Ingrident } from "../shared/Ingrident.model";

export class Receipe{
       public name :string;
       public description :string;
       public imgPath:string;
       public ingridents:Ingrident[]; 

       constructor(name:string,description:string,imgPath:string,ingridents:Ingrident[]){
            this.name=name;
            this.description=description;
            this.imgPath=imgPath;
            this.ingridents=ingridents;

       }

}