import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
            profilePic="https://upload.wikimedia.org/wikipedia/commons/7/7c/The_President%2C_Shri_Pranab_Mukherjee_presenting_the_Padma_Shri_Award_to_Shri_Virat_Kohli%2C_at_a_Civil_Investiture_Ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_March_30%2C_2017_%28cropped%29.jpg"
            message="this is Virat"
            timestamp="this is timing"
            username="VK"
            image="https://imagevars.gulfnews.com/2020/11/06/Virat-Kohli-and-Anushka-Sharma-_1759c9e837a_medium.JPG"
            />
            <Post
            profilePic="https://upload.wikimedia.org/wikipedia/commons/7/7c/The_President%2C_Shri_Pranab_Mukherjee_presenting_the_Padma_Shri_Award_to_Shri_Virat_Kohli%2C_at_a_Civil_Investiture_Ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_March_30%2C_2017_%28cropped%29.jpg"
            message="this is Virat"
            timestamp="this is timing"
            username="VK"
            image="https://imagevars.gulfnews.com/2020/11/06/Virat-Kohli-and-Anushka-Sharma-_1759c9e837a_medium.JPG"
            />
            <Post/>
        </div>
    )
}

export default Feed
