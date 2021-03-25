import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookie from 'cookie-parser'

declare const module : any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(cookie())

  await app.listen(process.env.PORT)

  if(module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
