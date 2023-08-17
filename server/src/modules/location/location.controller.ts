import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/createLocation.dto';
import { UpdateLocationDto } from './dto/updateLocation.dto';
import { AuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Request() req, @Body() createLocationDto: CreateLocationDto) {
    console.log("req", req);
    
    return this.locationService.create(req.user, createLocationDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAllData() {
    return this.locationService.findAllData();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.locationService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationService.update(id, updateLocationDto);
  }

  @UseGuards(AuthGuard)
  @Get("/user/:userId")
  findByUserLocation(@Param('userId') userId: number) {    
    return this.locationService.remove(userId);
  }
}
