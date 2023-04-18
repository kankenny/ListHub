import useAuth from "../../../lib/hooks/context-hooks/useAuthContext"
import useProfile from "../../../lib/hooks/context-hooks/useProfileContext"

const CurrentBalance = () => {
  const { balance } = useProfile()
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? (
    <div className="text-center flex gap-2 items-center">
      Your current balance is:
      <h1 className="text-lg font-semibold">${balance}</h1>
    </div>
  ) : null
}

export default CurrentBalance
