import { model, Schema } from "mongoose"

const TransactionSchema = new Schema({
    // name: {
    //     type: String,
    //     require: true
    // },
    // amount: {
    //     type: Number,
    //     require: true
    // },
    // startDate: {
    //     type: Date,
    //     require: true
    // },
    // endDate: {
    //     type: Date,
    //     require: true
    // }
}, {
    timestamps: true
});

export default model("Transaction", TransactionSchema);
