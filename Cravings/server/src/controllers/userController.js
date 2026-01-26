import User from "../models/userModel.js";

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("OldData: ", currentUser);

    // currentUser.fullName = fullName;
    // currentUser.email = email;
    // currentUser.mobileNumber = mobileNumber;
    // await currentUser.save();

    // console.log("NewData:", currentUser);

    const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        email,
        mobileNumber,
      },
      { new: true },
    );

    console.log("Updated User: ", updatedUser);
    res
      .status(200)
      .json({ message: "User Updated Sucessfully", data: updatedUser });

    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};

export const UserChangePhoto = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error("No image uploaded");
      error.statusCode = 400;
      return next(error);
    }

    const currentUser = req.user;

    const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    currentUser.photo = { url: base64Image };
    await currentUser.save();

    res.status(200).json({
      success: true,
      message: "Photo Updated Successfully",
      user: currentUser,
    });
  } catch (error) {
    next(error);
  }
};
