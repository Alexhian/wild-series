import { useLoaderData } from "react-router-dom";

function Programs() {
  console.info(useLoaderData());
  return (
    <div>
      <h1>Programs</h1>
    </div>
  );
}

export default Programs;
