import { Permissions } from './../permissions/permission.entity';
import { Delete } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import {
  Entity, Column, PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToMany
} from 'typeorm';


@Entity('roles')
export class Roles{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    active : boolean;

    @Column({unique:true})
    role : string ;
  //  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  /* @CreateDateColumn({
    name: 'created_at',
    type: "timestamp",
    default: ()=> "CURRENT_TIMESTAMP"
}) 
    'created_at': Date ; */ 

    @CreateDateColumn()
    created_at : Date;
    // !created_by
    /* @Column()
    created_by : number; */

    @UpdateDateColumn()
    updated_at: Date;
    // ! updated_by
  /*   @Column()
    updated_by : number; */

    @DeleteDateColumn()
    deleted_at : Date;
    users: any;
    // !deleted_by
    /* @Column()
    deleted_by : number; */

    @OneToMany(() => User, (user) => user.role)
    user: User[];

    // De esta manera se crear en automatico la tercera pivote
    @ManyToMany(()=> Permissions, (permission) => permission.roles)
    permisos: Permissions[];

}