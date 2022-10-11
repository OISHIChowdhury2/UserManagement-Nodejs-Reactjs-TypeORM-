import { Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,BaseEntity } from "typeorm"
 import bcrypt from "bcryptjs";
// import * as bcrypt from "bcryptjs";
import { IsNotEmpty, isEmpty, isPhoneNumber, Length,Max,MAX } from "class-validator"
@Entity()
@Unique(["password"])
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
    role: string;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
      }
    
      checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compare(unencryptedPassword, this.password);
      }
}
