import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Component {...pageProps} />
      </QueryClientProvider>
      <style jsx global>
        {`
          .people .people_img {
            max-width: 250px;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .people:hover .people_img {
            transform: scale(1.05) translateY(-10px);
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
