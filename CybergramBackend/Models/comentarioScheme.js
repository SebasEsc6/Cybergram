const { Schema, model } = require("mongoose");

const comentarioSchema = Schema(
  {
    contentComment: {
      type: String,
      require: true,
    },
    publicacion: {
      type: Schema.Types.ObjectId,
      ref: "publicacion",
      require: true,
    },
    nameUser: {
      type: Schema.Types.String,
      ref: "usuario",
      require: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);
comentarioSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("comentario", comentarioSchema);
