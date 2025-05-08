import { client } from "@/sanity/lib/client";
import { STARTUP_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import StartupCard, { StartupTypeCard } from "./StartupCard";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUP_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index) => (
      <li key={cn("Skeleton", index)}>
        <Skeleton className="startup_card-skeleon" />
      </li>
    ))}
  </>
);

export default UserStartups;
