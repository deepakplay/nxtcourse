import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <SignUp />
        </div>
    );
}
export default SignUpPage;