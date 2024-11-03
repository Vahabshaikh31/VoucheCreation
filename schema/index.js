const feeSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  studentName: { type: String, required: true },
  className: { type: String, required: true },
  totalFees: { type: Number, required: true },
  paidFees: { type: Number, default: 0 },
});

const Fee = mongoose.model("Fee", feeSchema);
