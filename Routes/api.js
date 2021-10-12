const Workout = require('../models/workout.js');

router.get('api/workouts', (req, res) => {
    Workout.find()
    .then(data => {
        console.log(data)
        res.json(data)
    }).catch(err => {
        res.status(400).json(err)
    })
})

router.post('/api/workouts', (req, res) => {
    console.log(req.body)
    Workout.create({})
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.status(400).json(err)
    })
}) 



module.exports = router