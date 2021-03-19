import { Table, Column, Model, AllowNull, DataType} from 'sequelize-typescript';

@Table({
    modelName: "user",
    paranoid: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    freezeTableName: true
})
 class User extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(30)
    })
    email!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(100)
    })
    password!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(30)
    })
    name!: string;
}

export default User;