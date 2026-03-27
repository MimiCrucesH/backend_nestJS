import { Roles } from 'src/roles/rol.entity';
import {
  Entity, Column, PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';


@Entity('permissions')
export class Permissions{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  active : boolean;

  @Column()
  permission : string;

  @Column()
  description : string;

  // Fechas
  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
 // ! created_by
/*  @Column()
 created_by : number; */

  @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
  // ! update_by
  /* @Column()
  updated_by :number; */

  @DeleteDateColumn({ name: 'deleted_at'}) 'deleted_at' : Date;
  // ! delete_by
 /*  @Column()
  deleted_by : number; */

  @ManyToMany(()=> Roles, (rol)=> rol.permisos)
  @JoinTable({
    name: 'roles_has_permissions',
    joinColumn:{
      name: 'role_id',// nombre en la tabla pivote
      referencedColumnName :'id' //columna en roles
    }, inverseJoinColumn :{
      name: 'permission_id',// nombre en la tabla pivote
      referencedColumnName :'id' //columna en permisos
    },
  })
  roles: Roles[];
}
