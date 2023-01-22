import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid';

@Entity()
export class Task {
    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    description: string

    @Column()
    completed: boolean

    constructor(){
        if(!this.id) {
            this.id = uuid()
        }
    }
}