import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center"> {/* Added 'justify-content-center' class */}
        <div className="col-6">
          <div className="card">
            <h3 className="card-header">User Login</h3>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
