const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutInfo = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    });

    workoutInfo
    .virtual("totalDuration")
    .get(() => {
        return this.exercises.reduce((total, exercise) => {
            return total + exercise.duration;
        }, 0);
    });

const Workout = mongoose.model("Workout", workoutInfo);

module.exports = Workout;