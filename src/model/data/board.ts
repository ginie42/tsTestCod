import { json } from 'sequelize';
import { Table, Column, Model, AllowNull, DataType} from 'sequelize-typescript';
import { sequelize } from '..';

@Table({
    modelName: "post",
    paranoid: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    freezeTableName: true
})
 class Board extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(30)
    })
    subject!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(100)
    })
    content!: string;

    // @AllowNull(false)
    // @Column({
    //     type: DataType.STRING(20)
    // })
    // author!: string;

}

export default Board;