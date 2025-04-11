import Link from "next/link";
const Signin = () => {
    return (
            <div>
                <p>
                    Login:
                </p>
                <p>
                    If your don't have accout create it <span><Link href="/signup">Here</Link></span>
                </p>
            </div>
    )
}

export default Signin;