export default function Home() {
  // Fake/mock user data
  const users = [
    { id: 1, name: "Abhyuday Sharma" },
    { id: 2, name: "Abhinav Sharma" },
    { id: 3, name: "Abha Sharma" },
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            ID: {user.id} - Name: {user.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
