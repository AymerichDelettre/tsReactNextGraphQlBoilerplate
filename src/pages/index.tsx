import { NavBar } from "../components/NavBar";
import { withUrqlClient } from "next-urql";
import { createUrlqClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <NavBar />
      <div>Hello world</div>
      {!data ? null : data.posts.map((p) => <div key={p.id}>{p.title}</div>)}
    </>
  );
};
export default withUrqlClient(createUrlqClient)(Index);
