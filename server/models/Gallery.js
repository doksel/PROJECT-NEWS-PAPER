import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  hash: {type: String, required: true, unique: true},
  authorId: [{type: Types.ObjectId, ref: "Users"}] ,
  categoryId: [{type: Types.ObjectId, ref: "Categories"}]   
})
 
schema.method('transform', function() {
  let obj = this.toObject();
  
  obj.id = obj._id;
  delete obj._id;

  return obj;
});

export default model("Gallery", schema);