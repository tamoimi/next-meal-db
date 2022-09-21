import { useEffect, useState } from "react";
import Image from "next/image";
import Seo from "../components/Seo";
import { useQuery } from "@tanstack/react-query";

export default function PeopleList({}) {
  //   const [people, setPeople] = useState([]);
  //   useEffect(() => {
  //     (async () => {
  //       const { results } = await (
  //         await fetch(
  //           `https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  //         )
  //       ).json();
  //       console.log(results);
  //       setPeople(results);
  //     })();
  //   }, []);
  // 데이터를 받아오고 있음

  const getPeople = async () => {
    const result = await (
      await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
      )
    ).json();
    console.log("people response => ", result);

    return result.results;
  };

  const { isLoading, error, data: people } = useQuery(["getPeople"], getPeople);

  if (error) return "에러 발생" + error.message;

  return (
    <>
      <div className="container">
        <Seo title="Home" />
        {isLoading ? (
          <>
            <div>Loading...</div>
          </>
        ) : (
          <>
            {people.map((people) => (
              <div className="people" key={people.id}>
                <h4>{people.name}</h4>
                <img
                  src={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
                />
              </div>
            ))}
          </>
        )}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .people img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .people:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .people h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
}
