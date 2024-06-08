import { useQuery } from "@tanstack/react-query";
import { Card } from "semantic-ui-react";
import { fetchApiCollectionVolumes } from "../Hooks/queries";
import BookCard from "./BookCard";
import { Book } from "../types";

interface iVolumeListProps {
  shelfId: number;
  accessToken: string;
}

const VolumeList = (props: iVolumeListProps) => {
  const { shelfId, accessToken } = props;
  const volumesResult = useQuery({
    queryKey: [`getShelf${shelfId}Volumes`, accessToken],
    queryFn: () => fetchApiCollectionVolumes(shelfId, accessToken),
    enabled: !!shelfId,
  });

  console.log(volumesResult.data);
  if (volumesResult.isPending) {
    return <span>Loading...</span>;
  }

  return (
    <Card.Group centered itemsPerRow={6}>
      {volumesResult.data.map((volume: Book) => {
        const { id, title, description, image, authors } = volume;
        return (
          <BookCard
            id={id}
            title={title}
            description={description}
            image={image}
            authors={authors}
          />
        );
      })}
    </Card.Group>
  );
};

export default VolumeList;
