import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  title: {type: String, required: true},
  text: {type: String, required: true},
  authorId: [{type: Types.ObjectId, ref: "Users"}] ,
  categoryId: [{type: Types.ObjectId, ref: "Categories"}]   
},
{ 
  timestamps: true 
})
 
schema.method('transform', function() {
  let obj = this.toObject();
  
  obj.id = obj._id;
  delete obj._id;

  return obj;
});

export default model("Articles", schema);