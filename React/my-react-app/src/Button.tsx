import './buttons.css'

type buttonprops = {
    flag: string;
}

export default function Button({flag}: buttonprops) {
    function click() {
        alert('Tombol Click')
    }

    function clicktrue(){
        alert('Tombol Click True')
    }

    return <button className='tombol' onClick={flag == 'hello' ? clicktrue : click}>
        Click Me
    </button>
}