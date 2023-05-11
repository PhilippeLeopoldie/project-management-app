type ProjectInitializer ={
  id?:number;
  name?:string;
  description?:string;
  imageUrl?: string;
  contractTypeId:number;
  contractSignedOn?:string;
  budget?:number;
  isActive?: boolean;
}
export class Project{
  id : number | undefined;
  name = '';
  description ='';
  imageUrl ='';
  contractTypeId: number | undefined;
  contractSignedOn: Date = new Date();
  budget = 0;
  isActive = false;
  get isNew():boolean{
    return this.id === undefined
  }

  constructor(initializer?: ProjectInitializer){
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.contractTypeId) this.contractTypeId = initializer.contractTypeId;
    if (initializer.contractSignedOn)
    this.contractSignedOn = new Date(initializer.contractSignedOn);
    if (initializer.budget) this.budget = initializer.budget;
    if (initializer.isActive) this.isActive = initializer.isActive;
  }
}

