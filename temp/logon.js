import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // send a request to the server to log the user in
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        // store the user's token in a cookie
        document.cookie = `token=${data.token}`;
        // redirect the user to the dashboard page
        router.push("/dashboard");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit">Log In</Button>
      </form>
    </Layout>
  );
};

export default Login;
