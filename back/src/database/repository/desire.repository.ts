import { EntityRepository, Repository } from "typeorm";
import { Desire } from "../entitys/desire.entity";


@EntityRepository(Desire)
export class DesireRepository extends Repository<Desire>{}