"use strict"
const express = require('express')
const router = express.Router();
const Post = require('../models/post');

router.get('/api/:subreddit', (req, res) => {
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
		res.send(results);
	});
});

router.get('/api/:subreddit/:id', (req, res) => {
	let id = req.params.id;

	Post.findById(id, (err, results) => {
		res.send(results);
	});
})

router.post('/api/:subreddit/new', (req, res) => {
	let subreddit = req.params.subreddit;
	let title = req.body.title;
	let content = req.body.content;

	let entry = new Post({
		title: title,
		content: content,
		subredditId: subreddit,
		comments: []
	})

	entry.save((err, response) => {
		if(err) console.log(err);
			res.send(true);
		})
})

router.post('/api/:subreddit/:id/new', (req, res) => {
	let comment = req.body.comment;
	let id = req.params.id;

	Post.findOneAndUpdate({_id: id}, {$push: {comments: comment}}).exec((err, doc) => {
		Post.findOne({_id: id}, (err, result) => {
			if(err)
			console.log(err);

			res.send(result);
		});
	})

})

module.exports = router;
