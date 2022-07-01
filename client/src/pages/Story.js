import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDiscoverPosts, DISCOVER_TYPES } from '../redux/actions/discoverAction'
import{getAllPosts,STORY_TYPES } from '../redux/actions/allpostAction'
import LoadIcon from '../images/loading.gif'
import PostThumb from '../components/PostThumb'
import LoadMoreBtn from '../components/LoadMoreBtn'
import { getDataAPI} from '../utils/fetchData'
import Storyitem from './StoryItem'
import axios from 'axios'

const Story = () => {
    const { auth, discover } = useSelector(state => state)
    const dispatch = useDispatch()
    const [story,setStory]=useState([])

    const [load, setLoad] = useState(false)
    useEffect(() => {
        axios.get(`https://tknw.herokuapp.com/api/getallpost`)
        .then(res => {
          
          setStory(res.data[0].reverse());
          
        //   console.log(res.data[0])
        })
        .catch(error => console.log(error));
    }, [load])
    

    useEffect(() => {
        if(!discover.firstLoad){
            dispatch(getAllPosts)
        }

    },[dispatch, auth.token, discover.firstLoad])

    // const handleLoadMore = async () => {
    //     setLoad(true)
    //     const res = await getDataAPI(`post_discover?num=${discover.page * 9}`, auth.token)
    //     dispatch({type: STORY_TYPES.UPDATE_POST, payload: res.data})
    //     setLoad(false)
    // }

    return (
        <div>
            {
                discover.loading 
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <Storyitem posts={story} result={story.length} />
            }
            {console.log(story)}
            {console.log(story.length)}

            {
                load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
            }

           
            
        </div>
    )
}

export default Story
