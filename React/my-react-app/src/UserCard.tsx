import './UserCard.css'

type Props = {
    name: string;
    job: string;
    avatarUrl: string;
};

export default function UserCard({ name, job, avatarUrl }: Props) {
    const handleFollow = () => {
        alert(`Followed ${name}!`);
    };

    return (
        <div className="card">
        <img src="http://localhost:5173/vite.svg" alt={`${name} avatar`} className="avatar" />
        <h2>{name}</h2>
        <p>{job}</p>
        <button onClick={handleFollow} className='tombols'>Follow</button>
    </div>
    );
}