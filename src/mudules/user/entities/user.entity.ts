import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../../common/abstract.entity';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  name: string;
}
