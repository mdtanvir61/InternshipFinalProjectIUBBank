import ResetBanner from "../components/Sections/ResetPasswordSection/ResetBanner"
import ResetPasswordForm from "../components/Sections/ResetPasswordSection/ResetPasswordForm"


const ResetPassword = () => {
    return(
        <div className="w-full overflow-x-hidden">
            <ResetBanner/>
            <ResetPasswordForm/>
        </div>
    )
}

export default ResetPassword

