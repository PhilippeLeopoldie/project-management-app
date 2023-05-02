export class Project{
  id : number | undefined;
  name = '';
  description ='';
  imageUrl ='';
  contractTypeId: number | undefined;
  contractSigneOn: Date = new Date();
  budget = 0;
  isActive = false;
  get isNew():boolean{
    return this.id === undefined
  }

  constructor(initializer?: any){
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.imageUrl;
    if (initializer.contractTypeId) this.contractTypeId = initializer.contractTypeId;
    if (initializer.contractSigneOn)
    this.contractSigneOn = new Date(initializer.contractSigneOn);
    if (initializer.budget) this.budget = initializer.budget;
    if (initializer.isActive) this.isActive = initializer.isActive;
  }
}

