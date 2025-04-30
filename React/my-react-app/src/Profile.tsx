import Button from "./button";


type Props ={
  name: string;
}

export default function Profile({name}: Props) {

    return (
      <>    
            <h1>
                Hai
            </h1>    
            <h2 >
                hi, {name}!
            </h2>
            <Button flag='hello' />
      </>
    )
  }
