import {useParams} from 'react-router-dom'


function Article(){
    let {article_id}=useParams()
    return(
        <h2>Article {article_id}</h2>
    )
}

export default Article