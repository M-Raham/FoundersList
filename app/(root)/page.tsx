import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAT: new Date(),
      _id: "1",
      views: 100,
      author: { _id: 1, name: "Raham"},
      description: "This is a test description",
      image:
        "https://plus.unsplash.com/premium_vector-1728572089769-392cad45b580?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch your startup, <br /> connect with enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, number) => (<StartupCard key={post?._id} post={post} />))
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
