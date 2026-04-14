import { useState } from "react";

function FormTable() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    if (!name) {
      setError("Name is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Email invalid");
      return;
    }

    setError("");

    const newUser = { name, email };
    setUsers([...users, newUser]);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" /><br />
        <input name="email" placeholder="Email" />
        <button type="submit">Add</button>
      </form>

      {error && <p style={{color:"red"}}>{error}</p>}

    br
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormTable;