import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { GLOBALTYPES } from '../redux/actions/globalTypes'

const Storyitem = ({posts, result}) => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state)

    if(result === 0) return <h2 className="text-center text-danger">No Post</h2>

    return (
        <div className="story">
            <img className='story-item' 
             src='https://previews.123rf.com/images/777nikolay777/777nikolay7771601/777nikolay777160100166/50996310-positive-symbol-zoom-in-plus-sign-icon-isolated-on-white-background.jpg' 
             onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })} alt=""
             />
            {
                posts.map(post => (
                    <Link key={post._id} to={`/post/${post._id}`}>
                        <div className="story_display">

                            {
                                post.images[0]
                              
                                ?<img className='story-item' src={post.images[0].url} alt={post.images[0].url}
                                style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
                                

                                :<video className='story-item' controls src={post.images[0].url} alt={post.images[0].url}
                                style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
                            }

                            {/* <div className="post_thumb_menu">
                                <i className="far fa-heart">{post.likes.length}</i>
                                <i className="far fa-comment">{post.comments.length}</i>
                            </div> */}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Storyitem
