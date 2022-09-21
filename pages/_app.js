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
    </>
  );
}

export default MyApp;
