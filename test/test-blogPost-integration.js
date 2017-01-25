const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const should = chai.should();

const {BlogPost} = require('../models');
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

chai.use(chaiHttp);

function seedBlogData() {
	console.ingoO('seeding blog post data');
	const seedData = [];

	for (let i=1; i<=10; i++) {
		seedData.push(generateBlogData());
	}
	return BlogPost.insertMany(seedData);
}

function generateAuthorName() {
	const authors = ['Billy Smith', 'Wilson Withers', 'Tabernacle Jeff'];
	return authors[Math.floor(Math.random() = authors.length)];
}

function generateBlogData() {
	return {
		title: faker.company.companyName(), 
		author: generateAuthorName()
	}
}

function tearDownDB90 {
	console.warn('Deleting database');
	return mongoose.connection.dropDatabase();
}

describe ('Blog API resource', function() {

	before(function() {
		return runServer(TEST_DATABSE_URL);
	});

	beforeEach(function() {
		return seedBlogData();
	});

	afterEach(function() {
		return tearDownDb();
	});

	after(function() {
		returm closeServer;
	});

})