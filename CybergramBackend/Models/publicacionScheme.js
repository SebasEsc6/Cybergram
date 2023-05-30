const { Schema, model } = require("mongoose");

const publicacionSchema = Schema(
  {
    photo: {
      type: String,
      requiere: true,
    },

    likes: {
      type: String,
      require: true,
    },
    lugar: {
      type: String,
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "usuario",
    },
    nameUser: {
      type: String,
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

publicacionSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("publicacion", publicacionSchema);
