import { Table, Column, Model, AllowNull, DataType, PrimaryKey, AutoIncrement, ForeignKey} from 'sequelize-typescript';
import FaqCategory from './faqCategory';

@Table({
    modelName: "faq",
    paranoid: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    freezeTableName: true
})
 class Faq extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type : DataType.INTEGER
    })
    idx !: number

    @ForeignKey(()=>FaqCategory)
    @Column({
        type : DataType.INTEGER
    })
    category_id !: number

    @AllowNull(false)
    @Column({
        type : DataType.STRING
    })
    subject!: string

    @AllowNull(false)
    @Column({
        type : DataType.TEXT
    })
    contents!: string
}

export default Faq;