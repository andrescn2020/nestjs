import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: "Toyota",
            model: "Corolla"
        },
        {
            id: 2,
            brand: "Ferrari",
            model: "Desertor"
        },
        {
            id: 3,
            brand: "Audi",
            model: "R8"
        }
    ];
    findAll(){
        return this.cars;
    }
    findOneById(id:number){
        return this.cars[id]
    }
}
