import useAuth from "../../../lib/hooks/useAuth"
import useProfile from "../../../lib/hooks/useProfile"

import Card from "../../ui/Card"
import ProfileActions from "./profile-actions/ProfileActions"

const Profile = () => {
  const { auth, logout } = useAuth()
  const { balance, address } = useProfile()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Card twClasses="h-96 p-10 w-full flex flex-col md:flex-row justify-around items-center">
        <div className="space-y-10">
          <h1 className="text-4xl font-bold">{auth.username}</h1>
          <div>
            <h2 className="text-lg">Address: {address}</h2>
            <h2 className="text-lg">Balance: ${balance}</h2>
          </div>
        </div>
        <ProfileActions logout={logout} />
      </Card>
    </div>
  )
}

export default Profile
