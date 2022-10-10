import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { isEmail, isEmpty, isPhoneNumber, Length,Max,MAX } from "class-validator"
@Entity()

export class Register extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    repassword: string
}
