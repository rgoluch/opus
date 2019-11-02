const router = require("express").Router();

let User = require("../models/user.model");

/**
 * test route to make sure server is running
 */
router.route("/test").get((req, res) => {
  res.json("/party/test");
});

/**
 * add a user to a party
 */
router.route("/join").post((req, res) => {
  const partyName = req.body.partyName;
  const phoneNumber = req.body.phoneNumber;

  const newUser = new User({ phoneNumber, partyName });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

/**
 * returns name of party user is in
 */
router.route("/user/:phoneNumber").get(async (req, res) => {
  let user = await User.findOne({ phoneNumber: req.params.phoneNumber });
  if (!user) {
    return res.status(400).send({ message: "the user does not exist" });
  }
  return res.json(user.partyName);
});

/**
 * deletes user from db
 */
router.route("/user/:phoneNumber").delete((req, res) => {
  User.findOneAndDelete({ phoneNumber: req.params.phoneNumber })
    .then(() => res.json("User deleted"))
    .catch(err => res.status(400).json("error: " + err));
});

/**
 * returns all users in a party
 */
router.route("/:partyName").get(async (req, res) => {
  let users = await User.find({ partyName: req.params.partyName });
  if (!users) {
    return res.status(400).send({ message: "party doesn't exist" });
  }
  return res.json(users.map(user => user.phoneNumber));
});

/**
 * returns all users
 */
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
