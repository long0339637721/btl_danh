import { Column, Entity, Index } from 'typeorm';
import { AbstractEntity } from '../../../../src/common/abstract.entity';

@Entity({ name: 'locations' })
export class LocationEntity extends AbstractEntity {
  @Index()
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  name: string;
}
