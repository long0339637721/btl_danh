import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../../common/abstract.entity';

@Entity({ name: 'locations' })
export class LocationEntity extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  rate: number;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar' })
  district: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'varchar' })
  country: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  qrCode: string;
}
