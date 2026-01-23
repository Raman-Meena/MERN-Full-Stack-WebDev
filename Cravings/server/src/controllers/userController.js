export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, mobileNumber, email } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    currentUser.fullName = fullName;
    currentUser.email = email;
    currentUser.mobileNumber = mobileNumber;
    await currentUser.save();

    res.status(200).json({message: "User Updated Successfully!", data: currentUser})
  } catch (error) {
    next(error);
  }
};
