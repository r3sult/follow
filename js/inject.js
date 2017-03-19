let InstaAPI = new InstagramAPI()

/* entry */
sendCookieRequest()
// injectFollowingStatusLabel()

// tell background.js to fetch Instagram cookies
function sendCookieRequest() {
	chrome.runtime.sendMessage('getCookies')
}

function injectFollowingStatusLabel(status) {
	let head = document.getElementsByClassName('_8mm5v')[0]
	let followingStatusLabel = document.createElement('div')
	followingStatusLabel.setAttribute('id', 'followingStatusLabel')
	head.insertBefore(followingStatusLabel, head.children[1])
	followingStatusLabel.innerHTML = status
}

// wait for background.js to send over cookies
chrome.runtime.onMessage.addListener( (request, sender, response) => {
	let instagramCookies = JSON.parse(request.instagramCookies)
	console.log(instagramCookies)
	// InstaAPI.getIDFromUsername(usernameOfCurrentURL, (info) => {
	// 	console.log(info)
	// 	injectFollowingStatusLabel('Following')
	// 	return
	// })
})