import { useEffect, useState } from "react";
import { details } from "../../services/getData";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const [credits, setCredits] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([details(id)])
        .then(([credits]) => {
          console.log(details)
          setCredits(credits);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);

  return;
  <>
    <p></p>
  </>;
}
