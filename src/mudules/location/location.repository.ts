import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Like, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { LocationEntity } from './entities/location.entity';

@Injectable()
export class LocationRepository {
  private readonly locationRepository: Repository<LocationEntity>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.locationRepository = this.dataSource.getRepository(LocationEntity);
  }

  findOneById(id: number) {
    return this.locationRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        comments: true,
      },
    });
  }

  findAll() {
    return this.locationRepository.find();
  }

  search(name: string) {
    return this.locationRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
      relations: {
        comments: true,
      },
    });
  }
}
