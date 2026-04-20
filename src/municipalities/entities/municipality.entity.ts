import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('municipalities') // :point_left: nombre exacto de la tabla
export class Municipality {

    @PrimaryColumn()
    id: number;

    @Column({ type: 'boolean', nullable: true })
    active: boolean;

    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'int', nullable: true })
    created_by: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    municipality: string;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;

    @Column({ type: 'int', nullable: true })
    updated_by: number;
}


