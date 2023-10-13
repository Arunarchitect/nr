import {Link} from 'react-router-dom'

const viteLogo = "/static/vite.svg"

function Home() {
    return (
        <div className="container">
            <h3 className=" pb-2 mb-3 ">Latest Articles <a href="#" className="float-end">See All</a></h3>
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
                <div className="col-md-3">
                    <div className ="card" >
                    <a href="#"><img src={viteLogo} className ="card-img-top" alt="..."/></a> 
                        <div className ="card-body">
                            <h5 className ="card-title"> <a href="#"> Blog Title</a></h5>
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
            <h3 className=" pb-1 mb-4">Professionals<a href="#" className="float-end">See All</a></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className ="card" >
                    <a href="#"><img src={viteLogo} className ="card-img-top" alt="..."/></a> 
                        <div className ="card-body">
                            <h5 className ="card-title"> <a href="#"> Blog Title</a></h5>
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
                <div className="col-md-3">
                    <div className ="card" >
                    <a href="#"><img src={viteLogo} className ="card-img-top" alt="..."/></a> 
                        <div className ="card-body">
                            <h5 className ="card-title"> <a href="#"> Blog Title</a></h5>
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

    );
  }
  
  export default Home;
  