import { Table, Column, Model, AllowNull, DataType, PrimaryKey, AutoIncrement} from 'sequelize-typescript';

@Table({
    modelName: "faq_category",
    paranoid: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    freezeTableName: true
})
 class FaqCategory extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type : DataType.INTEGER
    })
    idx!: number

    @AllowNull(false)
    @Column({
        type : DataType.STRING
    })
    name!: string
}

export default FaqCategory;