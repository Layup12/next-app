import { getAllUsers, User } from "@/services/users";
import Link from "next/link";

interface IUsers {
    users: User[];
}

export default function Users({ users }: IUsers) {
    return (
        <>
            <h1>Users</h1>
            <h4>User list</h4>
            <ul>
                {users.map(({ name, id }) => (
                    <li key={id}>
                        <Link href={`/users/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export async function getServerSideProps() {
    const users = await getAllUsers();

    if (!users) {
        return {
            notFound: true,
        };
    }

    return { props: { users } };
}
