class Vehicle {
    constructor(make,model,year){
      this.make=make;
      this.model=model;
      this.year=year
    }
    
    toString(){
      return `the make, model, and year are: ${this.make}${this.model}${this.year}`
    }
}

   const vehicle = new Vehicle("Honda Civic", " Daniel Ufeli", " 2000")
    vehicle.toString() 
