import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    controllers:[MoviesController],
    providers:[MoviesService],//여기있는 모든 것들을 import 해서 타입을 추가하는 것만으로도 잘 작동. dependency injection 이라고 
    //nest js에가 MoviesService를 import하고Contlloer 에 주입함.
})
export class MoviesModule {}
