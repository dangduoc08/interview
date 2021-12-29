import React from 'react'
import './user.scss'

// Requirements:
/*
1. Fetch user list from http://localhost:4040/users

2. Render users data to below table

3. Create 2 APIs on server
  - POST http://localhost:4040/users - to create a new user
  - DELETE http://localhost:4040/users - to delete a user

4. Create a form to submit new user
  - Refers UI to: https://drive.google.com/file/d/1bjuVGeP6uWbkkqXxStYhJuXskIOd8RRo/view?usp=sharing

5. Using SCSS, no inline styling
*/

function Users() {
  return <div id="users">
    <table>
      <tr>
        <th>Fullname</th>
        <th>Gender</th>
        <th>Date of birth</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
      </tr>
      <tr>
        <td>Mr.Phillip Davis</td>
        <td>Male</td>
        <td>2002-07-01T01:52:15.204Z</td>
        <td>phillip.davis@example.com</td>
        <td>0547039203</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    </table>
  </div>;
}

export default Users;
