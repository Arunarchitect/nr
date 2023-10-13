import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

const viteLogo = "/static/vite.svg"

function Article(){
    let {article_id}=useParams()
    return(
        <div className='container mt-3'>
            <h2 className='row'>
                <div className='col-4'>
                    <img src={viteLogo} className ="img-thumbnail" alt="..."/>
                </div>
                <div className='col-8'>
                    <h1>Article Title</h1>
                    <p>Building Information Modeling (BIM) is a digital process that involves creating and managing a comprehensive 3D model of a building or infrastructure project. BIM is a powerful tool in the field of architecture, engineering, and construction that has transformed the way professionals plan, design, construct, and manage buildings and infrastructure. Here's an overview of BIM:</p>
                    <p>Article by: <a href="#">Employee 1</a></p>
                </div>
            </h2>
            <h3 className=" pb-2 mb-3 ">Related Courses </h3>
            <div className="row">
                <div className="col-md-3">
                    <div className ="card" >
                    <Link to="article/1"><img src={viteLogo} className ="card-img-top" alt="..."/></Link>
                        <div className ="card-body">
                            <h5 className ="card-title"> <Link to="article/1"> Blog Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className ="card" >
                    <a href="#"><img src={viteLogo} className ="card-img-top" alt="..."/></a> 
                        <div className ="card-body">
                            <h5 className ="card-title"> <a href="#"> Blog Title</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Article