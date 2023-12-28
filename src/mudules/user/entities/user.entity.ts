import { Column, Entity, Index } from 'typeorm';
import { AbstractEntity } from '../../../../src/common/abstract.entity';
import { USER_AVATAR_URL } from '../../../constants';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {
  @Index()
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', default: USER_AVATAR_URL })
  avatar: string;
}
