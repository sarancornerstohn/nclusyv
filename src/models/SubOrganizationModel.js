// import mongoose from "mongoose";

// const subOrganizationSchema = new mongoose.Schema({
    
//     subOrganizationName: { type: String,required:true },
//     subOrganizationId: { type: String,required:true },
//     userName: { type: String,required:true },
//     password: { type: String,required:true },
//     subOrganizationLogo: { type: String,required:true },

// },{ versionKey: false })

// const SubOrganization = mongoose.models.enc_suborganization || mongoose.model("enc_suborganization", subOrganizationSchema);

// export default SubOrganization





import mongoose from "mongoose";


const subOrganizationSchema = new mongoose.Schema({

    subOrganizationName: { type: String, required: true },
    subOrganizationId: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    subOrganizationLogo: { type: String, required: true },
    mainOrganization: { type: mongoose.Schema.Types.ObjectId, ref: 'enc_organization' }
    
}, { versionKey: false });

const SubOrganization = mongoose.models.enc_suborganization || mongoose.model("enc_suborganization", subOrganizationSchema);

export default SubOrganization;
