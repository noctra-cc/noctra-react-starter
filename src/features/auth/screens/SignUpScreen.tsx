import { Input, Button } from "@/shared/components/ui";
import { Link } from "react-router";

export default function SignupScreen() {
  return (
    <form className="w-full space-y-4">
      <Input placeholder="Name" required />
      <Input placeholder="Email" type="email" required />
      <Input placeholder="Password" type="password" required />

      <Button>Sign Up</Button>

      <p className="text-sm text-center text-muted-foreground">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-primary-600 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
