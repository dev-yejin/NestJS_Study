import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { Movies2Controller } from './movies2/movies2.controller';
import { Movies2Service } from './movies2/movies2.service';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';

@Module({
  imports: [],
  controllers: [MoviesController, Movies2Controller, MovieController],
  providers: [Movies2Service, MovieService],
})
export class AppModule {}
