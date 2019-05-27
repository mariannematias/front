// Full Documentation - https://docs.turbo360.co/
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')

const CDN = (process.env.TURBO_ENV=='dev') ? null : process.env.TURBO_CDN

router.get('/', (req, res) => {
	const data = {cdn: CDN}
	turbo.pageConfig('home', process.env.TURBO_API_KEY, process.env.TURBO_ENV)
	.then(homeConfig => {
		data['page'] = homeConfig
		let ctr = new controllers.post()
		return ctr.get()
	})
	.then(posts => {
		data['posts'] = posts

		data['post'] = posts[0]
		data['post1'] = posts[1]
		data['post2'] = posts[2]
		return turbo.currentApp(process.env.TURBO_ENV)
	})
	.then(site => {
		data['site'] = site
		data['global'] = site.globalConfig
		data['preloaded'] = JSON.stringify({
			global: data.global,
			page: data.page
		})			
		res.render('home', data)
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/index-2', (req, res) => {
	const data = {cdn: CDN}
	turbo.pageConfig('home2', process.env.TURBO_API_KEY, process.env.TURBO_ENV)
	.then(home2Config => {
		data['page'] = home2Config
		let ctr = new controllers.post()
		return ctr.get()
	})
	.then(posts => {
		data['posts'] = posts

		data['post'] = posts[0]
		data['post1'] = posts[1]
		data['post2'] = posts[2]
		return turbo.currentApp(process.env.TURBO_ENV)
	})
	.then(site => {
		data['site'] = site
		data['global'] = site.globalConfig
		data['preloaded'] = JSON.stringify({
			global: data.global,
			page: data.page
		})	
		res.render('index-2', data)
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/index-3', (req, res) => {
	const data = {cdn: CDN}
	turbo.pageConfig('home3', process.env.TURBO_API_KEY, process.env.TURBO_ENV)
	.then(home3Config => {
		data['page'] = home3Config
		let ctr = new controllers.post()
		return ctr.get()
	})
	.then(posts => {
		data['posts'] = posts

		data['post'] = posts[0]
		data['post1'] = posts[1]
		data['post2'] = posts[2]
		return turbo.currentApp(process.env.TURBO_ENV)
	})
	.then(site => {
		data['site'] = site
		data['global'] = site.globalConfig
		data['preloaded'] = JSON.stringify({
			global: data.global,
			page: data.page
		})
		res.render('index-3', data)
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/blog', (req, res) => {
	const data = {cdn: CDN}

	let ctr = new controllers.post()
	ctr.get()
	.then(posts => {
		data['posts'] = posts
		return turbo.currentApp(process.env.TURBO_ENV)
	})
	.then(site => {
		data['site'] = site
		data['global'] = site.globalConfig
		res.render('blog', data)
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/post/:slug', (req, res) => {
	const data = {cdn: CDN}

	let ctr = new controllers.post()
	ctr.get({slug:req.params.slug})
	.then(posts => {
		if (posts.length == 0){
			throw new Error('Post '+req.params.slug+' not found.')
			return
		}

		data['post'] = posts[0]
		return turbo.currentApp(process.env.TURBO_ENV)
	})
	.then(site => {
		data['site'] = site
		data['global'] = site.globalConfig
		res.render('post', data)
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

module.exports = router
