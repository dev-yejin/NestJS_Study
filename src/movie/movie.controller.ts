import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Patch,
    Body,
    Query,
  } from '@nestjs/common';
  import { MoviesService } from './movie.service';
  
  @Controller('movies')
  export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
  
    @Get()
    getAll() {
      return this.moviesService.getAll();
    }
  
  
  }