import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:250})
    title:string;
    
    @Column({type:"text"})
    description:string;

    @Column({type:"tinyint", default: true})
    itsCommentable:number;

    @DeleteDateColumn()
    deletedAt:Date;

    @CreateDateColumn()
    createdAt:Date;
}
