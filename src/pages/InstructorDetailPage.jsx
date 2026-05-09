import { useParams } from "react-router-dom";

export default function InstructorDetailPage() {
    const { id } = useParams();

    return (
        <div>
            <h1>Instructor Detail Page</h1>
            <p>Showing instructor with ID: {id}</p>
        </div>
    );
}