import { useEffect, useState } from "react";

export default function PeopleList({  }) {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
        )
      ).json();
      console.log(data);
    })();
  }, []);
  // 데이터를 받아오고 있음 

//   const getPeople = async () => {
//     const result = await (
//       await fetch(
//         `https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
//       )
//     ).json();
//     console.log("people response => ", result);

//     return result.results;
//   };

  return;
  <>
    <div className="container">{}</div>
  </>;
}
