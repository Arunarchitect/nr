import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <aside className='col-md-3'>
            <div className='card'>
                <h5  className='card-header'>Dashboard</h5>
                <div className='list-group list-group-flush'>
                    <Link to="/" className='list-group-item list-group-item-action '>My Articles</Link>
                    <Link to="/" className='list-group-item list-group-item-action '>Profile Settings</Link>
                    <Link to="/" className='list-group-item list-group-item-action '>Change Password</Link>
                    <Link to="/" className='list-group-item list-group-item-action '>Logout</Link>
                </div>
            </div>
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Created By</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
