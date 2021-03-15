import { Test, TestingModule } from '@nestjs/testing'
import { catService } from './cat.service'

describe('catService', () => {
  let service: catService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [catService],
    }).compile()

    service = module.get<catService>(catService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
