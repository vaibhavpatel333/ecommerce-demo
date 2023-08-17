import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../../entity/location.entity';
import { CreateLocationDto } from './dto/createLocation.dto';
import { UpdateLocationDto } from './dto/updateLocation.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) { }

  async create(user, createLocationDto: CreateLocationDto): Promise<Location> {
    const location = new Location();
    location.name = createLocationDto.name;
    location.address = createLocationDto.address;
    location.city = createLocationDto.city;
    location.country = createLocationDto.country;
    location.postalCode = createLocationDto.postalCode;
    location.state = createLocationDto.state;
    location.userId = user.id;
    return await this.locationRepository.save(location);
  }

  async findAllData(): Promise<Location[]> {
    return await this.locationRepository.find();
  }

  async findOne(id: number): Promise<Location | undefined> {
    return await this.locationRepository.findOne(id);
  }

  async findByUserLocation() {
    console.log("hello");
    
    return await this.locationRepository.find({ where: { userId: 3 } });
  }

  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location | undefined> {
    await this.locationRepository.update(id, updateLocationDto);
    return await this.locationRepository.findOne(id);
  }

  async remove(userId) {  
   return await this.locationRepository.find({where: {userId: userId}});
  }
}
