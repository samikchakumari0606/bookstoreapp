import React from 'react';
import "./MyBanner.css"

const MyBanner = () => {
  return (
    <div>
       
        <div className='box'>
            <div className='one'>
                <h1>Hello welcome in our app</h1>
                <p>Digital storytelling and book making can help students express themselves and demonstrate learning. These great digital book creation apps and websites take traditional books and storybooks a step further, combining text with visual and audio elements to make students' publications truly multimodal.
                Students can write down their thoughts and assemble a collection of original or curated content ranging from photos, drawings, and images to audio and video clips -- in some cases, even animated text.
                </p>

                <input type="text" placeholder='enter your email to login'/>
                <br/>
                <button>Secondary</button>
            </div>
             <div className='two'>

                <img className='myBannerImg' src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHwwfDB8fHww"/>
             </div>
        </div>
      
    </div>
  )
}

export default MyBanner
