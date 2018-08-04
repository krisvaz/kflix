const express = require('express');
const router = express.Router();
const fs = require('fs');

// @route GET api/Seriess/:id
// @desc Get an Series by id
// @access Public
router.get('/', (req, res) => {
    const path = 'assets/bman.mkv';
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1

        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mkv'
        }

        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mkv'
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
});

// @route GET api/Seriess/:id
// @desc Get an Series by id
// @access Public
router.get('/:vidFile', (req, res) => {
    const path = 'assets/' + req.params.vidFile;
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1

        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/x-m4v'
        }

        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/x-m4v'
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
});

module.exports = router;