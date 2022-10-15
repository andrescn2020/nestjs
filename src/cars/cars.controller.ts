import { Controller, Get, Param, ParseIntPipe, NotFoundException, Post, Body, Patch, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number){
        if(!this.carsService.findOneById(id)) throw new NotFoundException(`Car with id '${id}' not found`)
        return this.carsService.findOneById(id);
    }

    @Post()
    create(@Body() body:any) {
        return body;
    }

    @Patch(':id')
    updatedCard(@Body() body:any) {
        return body;
    }

    @Delete(':id')
    deleteCard(@Param('id', ParseIntPipe) id:number) {
        return {
            method: "DELETE",
            id
        }
    }

}
