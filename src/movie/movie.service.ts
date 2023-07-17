import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {

  getAll(): string{
    return "안녕";
  }

}