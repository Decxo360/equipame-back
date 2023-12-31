import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class User {
    @Column({primary:true,generated:true})
    id: number;

    @Column({length:200})
    name:string;

    @Column({length:200})
    lastname:string;

    @Column({length:200})
    middlename: string;

    @Column({length:200})
    password:string;

    @Column({length:200, unique:true})
    email:string;

    @Column({length:200, default: "user"})
    type:string;

    @Column({default: 0})
    membership:number;

    @Column({length:200})
    typeMembership:string;

    @Column()
    age:number;

    @DeleteDateColumn()
    deletedAt: Date; 
}
