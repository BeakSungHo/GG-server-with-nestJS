//import { CustomRepository } from 'src/Custom/typeorm-ex.decorator';
import { CustomRepository } from 'src/GG-Project_Server/Custom/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { ApiMarkers } from '../Entity/ApiMarkers.entitiy';

@CustomRepository(ApiMarkers)
export class MarkerRepository extends Repository<ApiMarkers> {

    
}
