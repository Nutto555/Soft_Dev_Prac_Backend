const Hospital = require('../models/Hospital');

//@desc     Get all hospitals
//@route    GET /api/v1/hospitals
//@access   Public
exports.getHospitals=async (req,res,next)=>{
    try {
        const hospitals = await Hospital.find();
        res.status(200).json({success:true, count:hospitals.length, data:hospitals});
    } catch (err) {
        res.status(400).json({success:false});
    }
    // res.status(200).json({success:true , msg:"Get all hospitals"});
};

//@desc     Get single hospital
//@route    GET /api/v1/hospitals/:id
//@access   Public 
exports.getHospital=async (req,res,next)=>{
    try {
        const hospital = await Hospital.findById(req.params.id);

        if (!hospital) {
            return res.status(400).json({success:false});
        }
    } catch (err) {
        res.status(400).json({success:false});
    }
    // res.status(200).json({success:true, msg:`Get hospital ${req.params.id}`});
};

//@desc     Create new hospital
//@route    POST /api/v1/hospitals
//@access   Private
exports.createHospital= async (req,res,next)=>{
    console.log(req.body);
    const hospital = await Hospital.create(req.body);
    res.status(201).json({
        success: true,
        data: hospital
    });
    // console.log(req.body)
    // res.status(200).json({success:true , msg:"Create new hospitals"});
};

//@desc     Update hospital
//@route    PUT /api/v1/hospitals
//@access   Private
exports.updateHospital=async (req,res,next)=>{
    try {
        const hospital = await Hospital.findByIdAndUpdate(req,params.idm, req.body, {
            new: true,
            runValidators: true
        });

        if (!hospital){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:hospital});
    } catch (err) {
        res.status(400).json({success:false});
    }
    // res.status(200).json({success:true, msg:`Update hospital ${req.params.id}`});
};

//@desc     Delete hospital
//@route    DELETE /api/v1/hospitals/:id
//@access   Private
exports.deleteHospital=async (req,res,next)=>{
    try {
        const hospital = await Hospital.findByIdAndDelete(req.params.id);

        if (!hospital){
            return res.status(400).json({success:false});
        }

        res.status(200).json({success:true, data: {}});
    } catch (err) {
        res.status(400).json({success:false});
    }
    // res.status(200).json({success:true, msg:`Delete hospital ${req.params.id}`});
};