import { Module } from '@nestjs/common';
import { MoviesController } from './movie/movie.controller';
import { MoviesService } from './movie/movie.service';
;

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
