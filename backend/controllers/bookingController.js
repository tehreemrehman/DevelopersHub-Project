import Booking from "../models/Booking.js";

export const createbooking = async (req,res)=>{
   const newbooking = new Booking (req.body);
   await newbooking.save();
   res.json (newbooking);
}

export const getbooking = async (req, res)=>{
    const bookings = await Booking.find();
    res.json(bookings);
}

export const deleteBooking = async (req, res)=>{
    try{
        await Booking.findByIdAndDelete(req.params.id);
        res.json({message: "Booking deleted"});
    } catch(error){
        res.status(500).json({ error: "Server error" });
    }
};