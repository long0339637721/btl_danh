import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationRepository } from './location.repository';
import { SearchByNameDto } from './dto/search-by-name.dto';

@Injectable()
export class LocationService {
  constructor(private readonly locationRepository: LocationRepository) {}

  create(createLocationDto: CreateLocationDto) {
    return 'This action adds a new location';
  }

  findAll() {
    return this.locationRepository.findAll();
  }

  search(searchByNameDto: SearchByNameDto) {
    return this.locationRepository.search(searchByNameDto.name);
  }

  async findOne(id: number) {
    const locationEntity = await this.locationRepository.findOneById(id);
    if (!locationEntity) {
      throw new NotFoundException(`Location #${id} not found`);
    }
    return locationEntity;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
