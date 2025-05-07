import './App.css'
import Button from './Button.tsx'
import Profile from './Profile.tsx'
import UserCard from './UserCard.tsx'
import { PropHello } from "./Profile.dto";

function App() {
  const props: PropHello = {
    name: 'Rafi',
    gender: 'Laki-Laki',
    umur: 20
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Full Stack Developer</h2>
      <Profile {...props}/>
      {/* <Profile name='Rafi' gender='Laki-Laki' umur={20}/> */}
      <Button flag='Hello'/>
      <Button flag=''/>
      <UserCard name="Rafi Nizamudin" job="Full Stack Delopment" avatarUrl="http://localhost:5173/vite.svg" />
      {/* <UserCard name="Zahwa Aprilia Putri Winary" job="Web Delopment" avatarUrl="http://localhost:5173/vite.svg" /> */}
    </>
  )
}

export default App
