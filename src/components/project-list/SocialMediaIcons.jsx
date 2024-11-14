//import { useState } from "react"



//images
// white image
import facebookWhite from "/src/assets/icons/social_media_icon/facebook-white.svg"
import githubWhite from "/src/assets/icons/social_media_icon/github-white.svg"
import instagramWhite from "/src/assets/icons/social_media_icon/instagram-white.svg"
import linkedinWhite from "/src/assets/icons/social_media_icon/linkedin-white.svg"
import twitterWhite from "/src/assets/icons/social_media_icon/twitter-white.svg"
import youtubeWhite from "/src/assets/icons/social_media_icon/youtube-white.svg"

/*color image
import facebookColor from "/src/assets/icons/social_media_icon/facebook-color.svg"
import githubColor from "/src/assets/icons/social_media_icon/github-color.svg"
import instagramColor from "/src/assets/icons/social_media_icon/instagram-color.svg"
import linkedinColor from "/src/assets/icons/social_media_icon/linkedin-color.svg"
import twitterColor from "/src/assets/icons/social_media_icon/twitter-color.svg"
import youtubeColor from "/src/assets/icons/social_media_icon/youtube-color.svg"*/


function SocialMediaIcons() {

    return <div className="h-screen w-screen bg-gradient-to-tl from-red-100 to-red-500 flex place-content-center justify-center items-center">
        <div className="flex center space-x-4 p-4">
            <a href="https://www.facebook.com/" className="py-6 px-3"><img src={facebookWhite} className="h-16 w-16"/></a>
            <a href="https://www.github.com/" className="py-6 px-3"><img src={githubWhite} className="h-16 w-16"/></a>
            <a href="https://www.instagram.com/" className="py-6 px-3"><img src={instagramWhite} className="h-16 w-16"/></a>
            <a href="https://www.linkedin.com/" className="py-6 px-3"><img src={linkedinWhite} className="h-16 w-16"/></a>
            <a href="https://www.twitter.com/" className="py-6 px-3"><img src={twitterWhite} className="h-16 w-16"/></a>
            <a href="https://www.youtube.com/" className="py-6 px-3"><img src={youtubeWhite} className="h-16 w-16"/></a>
        </div>
    </div>
}

export default SocialMediaIcons