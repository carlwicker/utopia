import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit" className="bg-blue-400 p-5 rounded text-white">
        Sign In with GitHub
      </button>
    </form>
  );
}
