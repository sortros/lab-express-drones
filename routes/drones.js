const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones 
  // ... your code here
  Drone.find({})
  .then((allTheDronesFromDB) => {
    console.log(allTheDronesFromDB)
    res.render("drones/list", { allTheDronesFromDB });
  })
  .catch((error) => {
    console.log('Error while getting the drones from the DB: ', error);
    next(error);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(error => {
      next(error)
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;

  Drone.findById(id)
    .then(droneToEdit => {
      
      res.render('drones/update-form', {droneToEdit}); // <-- add this line
    })
    .catch(error => next(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => res.redirect(`/drones`))
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
