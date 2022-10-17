import { Entity, PrimaryGeneratedColumn,
    Column,CreateDateColumn,
    UpdateDateColumn,
    } from "typeorm";
 import bcrypt from "bcryptjs";
// import * as bcrypt from "bcryptjs";
export enum UserStatus {
  ACTIVE = "A",
  INACTIVE = "I"
}
@Entity()
export class Register {

    @PrimaryGeneratedColumn()
    id: number

    @Column(
    )
    firstName: string

    @Column()
    lastName: string

    @Column( {unique: true})
    email: string

    @Column()
    password: string


    @Column()
    role: string;

    @Column({
      type: "enum",
      enum: UserStatus,
      default: UserStatus.ACTIVE
  })
  status: UserStatus;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
      }
}
