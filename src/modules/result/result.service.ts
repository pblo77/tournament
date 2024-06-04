// result.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from './result.entity';
import { ResultRepository } from './result.repository';
import { CreateResultDto } from './dto/create.result.dto';
import { UpdateResultDto } from './dto/update.result.dto';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result)
    private readonly resultRepository: ResultRepository,
  ) {}

  async createResult(createResultDto: CreateResultDto): Promise<Result> {
    const newResult = this.resultRepository.create(createResultDto);
    return await this.resultRepository.save(newResult);
  }
  
  async updateResult(id: number, updateResultDto: UpdateResultDto): Promise<Result> {
    const result = await this.getResultById(id);
    return await this.resultRepository.save({ ...result, ...UpdateResultDto });
  }
  
  async deleteResult(id: number): Promise<boolean> {
    const result = await this.getResultById(id);
    const deleted = await this.resultRepository.delete(id);
    return !!deleted.affected;
  }
  
  async getResultById(id): Promise<Result> {
    const result = await this.resultRepository.findOne(id);
    if (!result) throw new NotFoundException(`Result with ID ${id} not found`);
    return result;
  }
  
  async getAllResults(): Promise<Result[]> {
    return await this.resultRepository.find();
  }
  
}
