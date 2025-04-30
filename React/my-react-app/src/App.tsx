import './App.css'
import Button from './button.tsx'
import Profile from './Profile.tsx'
import UserCard from './UserCard.tsx'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <Profile name='rafi'/>
      <Button flag=''/>
      <UserCard name="Rafi Nizamudin" job="Full Stack Delopment" avatarUrl="http://localhost:5173/vite.svg" />
      <UserCard name="Zahwa Aprilia Putri Winary" job="Web Delopment" avatarUrl="http://localhost:5173/vite.svg" />
    </>
  )
}

export default App
