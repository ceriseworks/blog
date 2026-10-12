interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://www.cerise.works', // Public origin: the blog is served at www.cerise.works/blog through a proxy
	author: 'Cerise', // Site author
	title: 'Cerise Blog', // Site title.
	description:
		'Notes from Cerise, a small product studio, on building, fixing and shipping software for businesses.', // Description to display in the meta tags
	lang: 'en',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
