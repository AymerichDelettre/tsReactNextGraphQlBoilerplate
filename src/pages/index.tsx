import { withUrqlClient } from "next-urql";
import { createUrlqClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";
import { Layout } from "../components/Layout";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <Layout>
      <NextLink href="/create-post">
        <Link>create post</Link>
      </NextLink>
      <br />
      {!data ? (
        <div>loading...</div>
      ) : (
        data.posts.map((p) => <div key={p.id}>{p.title}</div>)
      )}
    </Layout>
  );
};
export default withUrqlClient(createUrlqClient, { ssr: true })(Index);
