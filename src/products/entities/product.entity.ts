import { Column, CreateDateColumn, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Product {
    @Column({primary:true,generated:true})
    id: number;

    @Column()
    category: number;

    @Column()
    amount: number;

    @Column()
    name: string;

    @Column()
    rentPrice:number;

    @Column()
    type:number;

    @Column({ type: "tinyint"})
    visible:number;

    @Column( { type: "tinyint"})
    itsSale: number;

    @Column({type:"text"})
    description: string

    @DeleteDateColumn()
    deletedAt:Date;

    @CreateDateColumn()
    createdAt:Date;
}

