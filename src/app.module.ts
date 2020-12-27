import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({//데코레이터라고 불림 ,nestjs 를 사용하기위해 익숙해져야함 ,데코레이터는 클레스에 함수기능을 추가할 수 있다.
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
