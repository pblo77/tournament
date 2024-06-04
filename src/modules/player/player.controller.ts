// player.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create.player.dto';
import { UpdatePlayerDto } from './dto/update.player.dto';
import { Player } from './player.entity';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  async getAllPlayers(): Promise<Player[]> {
    return this.playerService.getAllPlayers();
  }

  @Post()
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playerService.createPlayer(createPlayerDto);
  }

  @Put(':id')
  async updatePlayer(@Param('id') id: number, @Body() updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    return this.playerService.updatePlayer(id, updatePlayerDto);
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: number): Promise<void> {
    const deleted = await this.playerService.deletePlayer(id);
    if (!deleted) throw new NotFoundException(`Player with ID ${id} not found`);
  }
}
