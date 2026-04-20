import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('settlements')
export class Settlement {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  zip_code: number;

  @Column({ type: 'varchar', length: 255 })
  settlement: string;

  @Column({ type: 'int' })
  municipality_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  d_tipo_asenta: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  d_mnpio: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  d_estado: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  d_ciudad: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  d_cp: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  c_estado: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  c_oficina: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  c_cp: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  c_tipo_asenta: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  id_asenta_cpcons: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  d_zona: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  c_cve_ciudad: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'int', default: 71 })
  created_by: number;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'int', nullable: true })
  settlements_shape_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  settlements_suac: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  latitude: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  longitude: string;

  @Column({ type: 'int', nullable: true })
  station_code_id: number;
}
