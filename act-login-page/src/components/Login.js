import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Display the form submission here 
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div
      style={{
        backgroundImage: "url(/vhs.png)",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div class="container">
        <div class="vh-100 d-flex justify-content-center align-items-center">
          <span class="col-md-5 p-5 shadow-sm border border-primary bg-white">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Username:</label>
                <input
                  type="text"
                  class="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
