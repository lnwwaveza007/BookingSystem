import * as bookingModel from "../models/BookingModel.js";

export const getReserveDetails = async (req, res) => {
    try {
      const ReserveDetails = await bookingModel.getReserveDetails();
      return res.json({
        success: true,
        data: ReserveDetails,
        message: "Reserve details retrieved successfully",
      });
    } catch (error) {
      console.error("Error: ", error);
      return res.status(500).json({
        success: false,
        data: null,
        message: "Failed to retrieve Reserve details",
      });
    }
  };