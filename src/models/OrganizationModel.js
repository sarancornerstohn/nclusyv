import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
    
    organizationName: { type: String,required:true },
    organizationId: { type: String,required:true },
    userName: { type: String,required:true },
    password: { type: String,required:true },
    organizationLogo: { type: String,required:true },

},{ versionKey: false })

const Organization = mongoose.models.enc_organization || mongoose.model("enc_organization", organizationSchema);

export default Organization