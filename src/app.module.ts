import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TestResourceModule } from './test-resource/test-resource.module';

@Module({
  imports: [TestResourceModule],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
