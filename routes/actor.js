const mongoose = require('mongoose');
const Actor = require('../models/actor');
const Movie = require('../models/movie');

module.exports = {
    getAll: function (req, res) {
        Actor.find({}).populate('movies').exec(function(err, actor) {
            if (err) {
                return res.status(404).json(err);
            } else {
                res.json(actor);
            }
        })
    },
    createOne: function (req, res) {
        let newActorDetails = req.body;
        newActorDetails._id = new mongoose.Types.ObjectId();
        let actor = new Actor(newActorDetails);
        actor.save(function (err) {
            res.json(actor);
        });
    },
    getOne: function (req, res) {
        Actor.findOne({ _id: req.params.id })
            .populate('movies')
            .exec(function (err, actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();
                res.json(actor);
            });
    },
    updateOne: function (req, res) {
        Actor.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, actor) {
            if (err) return res.status(400).json(err);
            if (!actor) return res.status(404).json();
            res.json(actor);
        });
    },
    deleteOne: function (req, res) {
        Actor.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },
    removeMovie: function (req, res) {
        Actor.updateOne({ _id: req.params.movieID}, { $pull: { actors: req.params.movieID } }, function (err, actor) {
            if (err) return res.status(400).json(err);
            res.json(actor);
        });
    },
    //PUT actor to movie
    addActor: function(req, res){
      Movie.findOne({ title : req.params.movieTitle }, function (err, movie) {
          if (err) return res.status(400).json(err);
          if (!movie) return res.status(404).json();
          Actor.findOne({ name : req.params.actorName }, function (err, actor) {
              if (err) return res.status(400).json(err);
              if (!actor) return res.status(404).json();
              movie.actors.push(movie._id);
              movie.save(function (err) {
                  if (err) return res.status(500).json(err);
                  res.json(actor);
              });
          })
      });
  },


};
