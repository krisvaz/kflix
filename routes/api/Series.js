const express = require('express');
const router = express.Router();

// Series Model
const Series = require('../../config/models/Series');

// @route GET api/Seriess
// @desc Get all Seriess
// @access Public
router.get('/', (req, res) => {
    Series.find()
        .sort({ date: -1 })
        .then(Series => res.json(Series))
});

// @route GET api/Seriess/:id
// @desc Get an Series by id
// @access Public
router.get('/:id', (req, res) => {
    Series.findById(req.params.id)
        .then(Series => res.json(Series))
        .catch(err => res.status(404).json({ success: false }))
});

// @route POST api/Seriess
// @desc  create an Series
// @access Public
router.post('/', (req, res) => {
    const newSeries = new Series({
        name: req.body.name,
        url: req.body.url
    });
    newSeries.save()
        .then(Series => res.json(Series));
});

// @route Delete api/Seriess
// @desc delete Series
// @access Public
router.delete('/:id', (req, res) => {
    Series.findById(req.params.id)
        .then(Series => Series.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));

});

// @route Update api/Seriess
// @desc update Series
// @access Public
router.put('/:id', (req, res) => {
    Series.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(series => {
            Series.findById(req.params.id)
                .then(Series => res.json(series))
                .catch(err => res.status(404).json({ success: false }))
        })
        .catch(err => {
            res.status(404).json({ successOut: false });
            console.log(err);
        });

});

module.exports = router;