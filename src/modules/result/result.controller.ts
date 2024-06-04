// result.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { ResultService } from './result.service';
import { CreateResultDto } from './dto/create.result.dto';
import { UpdateResultDto } from './dto/update.result.dto';
import { Result } from './result.entity';

@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Get()
  async getAllResults(): Promise<Result[]> {
    return this.resultService.getAllResults();
  }

  @Post()
  async createResult(@Body() createResultDto: CreateResultDto): Promise<Result> {
    return this.resultService.createResult(createResultDto);
  }

  @Put(':id')
  async updateResult(@Param('id') id: number, @Body() updateResultDto: UpdateResultDto): Promise<Result> {
    return this.resultService.updateResult(id, updateResultDto);
  }

  @Delete(':id')
  async deleteResult(@Param('id') id: number): Promise<void> {
    const deleted = await this.resultService.deleteResult(id);
    if (!deleted) throw new NotFoundException(`Result with ID ${id} not found`);
  }
}
