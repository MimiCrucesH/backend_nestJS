import { Roles } from 'src/roles/rol.entity';
import {
  Entity, Column, PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn
} from 'typeorm';


@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  last_name : string;

  @Column()
  middle_name : string;

  @Column()
  name : string;

  @Column ({unique:true})
  email: string;

  @Column()
  password: string;

  @Column()
  active : boolean;
  
  // FK de la tabla roles
  /* @Column()
  role_id : number; */
  @ManyToOne(() => Roles, (role) => role.users)
  // Agregado para que no se tengan que poner entre las llaves dobles
  @JoinColumn({name: 'role_id'})
  role: Roles;

// Fechas
 @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
 
 // ! created_by
/*  @Column()
 created_by : number; */

 @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;

  // !update_by
/*   @Column()
  updated_by : number; */

 @DeleteDateColumn({ name: 'deleted_at'}) 'deleted_at' : Date;

  // ! delete_by
 /*  @Column()
  deleted_by : number; */

  
  
}


