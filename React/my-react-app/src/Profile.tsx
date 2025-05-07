import { PropHello } from "./Profile.dto";


export default function Profile({name, gender, umur=15}: PropHello) {

    return (
      <>       
            <h1 >
                Hi, {name}!
            </h1>
            <h2>
              My Gender: {gender}
            </h2>
            <h2>
              Umur Saya: {umur}
            </h2>
      </>
    )
  }
