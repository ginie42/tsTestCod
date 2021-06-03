import { Table, Column, Model, AllowNull, DataType, PrimaryKey, AutoIncrement, ForeignKey} from 'sequelize-typescript';
import Faq from './faq';
import User from './user';

@Table({
    modelName: "faq_member",
    paranoid: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    freezeTableName: true
})
 class FaqMember extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type : DataType.INTEGER
    })
    idx !: number

    @ForeignKey(()=>Faq)
    @Column({
        type : DataType.INTEGER
    })
    faq_id !: number

    @ForeignKey(()=>User)
    @Column({
        type : DataType.INTEGER
    })
    member_id !: number

    @AllowNull(false)
    @Column({
        type : DataType.ENUM('100','200')
    })
    type!: number
}

export default FaqMember;