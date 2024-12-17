import { useLoaderData } from "react-router-dom";

function Programs() {
  const programs = useLoaderData() as { id: number; title: string; poster: string; synopsis: string; country: string; year: number }[];
  const data = programs.map((programs) => (
    <div key={programs.id}>
      <h2>{programs.title}</h2>
      <img src={programs.poster} width={200} alt={programs.title} />
      <p>{programs.synopsis}</p>
      <p>
        {programs.country} - {programs.year}
      </p>
    </div>
  ));
  return (
    <div>
      <h1>Programs</h1>
        {data}
    </div>
  );
}

export default Programs;
