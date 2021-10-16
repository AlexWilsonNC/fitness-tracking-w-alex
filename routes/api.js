const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duration'
            }}
        }
    ])
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(workout => {
            res.json(workout)
        }).catch(err => {
            res.json(err)
        })
})

router.put('api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercise: req.body } },
        { new: true, runValidators: true })
        .then(workout => {
            res.json(workout)
        }).catch(err => {
            res.json(err)
        })
})

router.get(`/api/workouts/range`, (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:
                    { $sum: '$exercise.duration' },
                totalWeight:
                    { $sum: '$exercises.weight' }
            }
        }
    ])
        .limit(10)
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router