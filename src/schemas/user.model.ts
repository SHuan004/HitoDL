import {
  AllowNull,
  Column,
  DataType,
  Default,
  HasMany,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";
import { Post } from "./post.model";

@Table
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  uid!: string;

  @Default("John Doe")
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @HasMany(() => Post)
  posts!: Post[];
}
