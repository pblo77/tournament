// player.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { PlayerRepository } from './player.repository';
import { CreatePlayerDto } from './dto/create.player.dto';
import { UpdatePlayerDto } from './dto/update.player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: PlayerRepository,
  ) {}

  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const newPlayer = this.playerRepository.create(createPlayerDto);
    return await this.playerRepository.save(newPlayer);
  }
  
  async updatePlayer(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const player = await this.getPlayerById(id);
    return await this.playerRepository.save({ ...player, ...updatePlayerDto });
  }

  async deletePlayer(id: number): Promise<boolean> {
    const player = await this.getPlayerById(id);
    const deleted = await this.playerRepository.delete(id);
    return !!deleted.affected;
  }
  
  async getPlayerById(id): Promise<Player> {
    const player = await this.playerRepository.findOne(id);
    if (!player) throw new NotFoundException(`Player with ID ${id} not found`);
    return player;
  }
  
  async getAllPlayers(): Promise<Player[]> {
    return await this.playerRepository.find();
  }
  
}
