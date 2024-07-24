import TransationSchema from "../schemas/Transaction.js";

async function create(data) {
  return TransationSchema.create(data);
}

async function findAllByUser(id) {
  return await TransationSchema.find({ userId: id });
}
export default {
  create,
  findAllByUser,
};
