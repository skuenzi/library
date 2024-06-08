import { useState } from "react";
import {
  Container,
  Accordion,
  AccordionTitle,
  AccordionContent,
  Menu,
} from "semantic-ui-react";

import CreateCollection from "../Components/CreateCollection";
import { useQuery } from "@tanstack/react-query";
import { fetchAccessToken, fetchApiCollections } from "../Hooks/queries";
import VolumeList from "../Components/VolumeList";

const Collections = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accessToken = fetchAccessToken();

  const shelvesResult = useQuery({
    queryKey: ["getCollections", accessToken],
    queryFn: () => fetchApiCollections(accessToken),
  });

  if (shelvesResult.isPending) {
    return <span>Loading...</span>;
  }

  const onAccordionClick = (shelfId) => {
    setActiveIndex(shelfId);
  };

  return (
    <Container>
      {shelvesResult.data.length > 0 &&
        shelvesResult.data.map((collection) => {
          return (
            <Accordion key={collection.id} as={Menu} vertical fluid styled>
              <AccordionTitle
                onClick={() => onAccordionClick(collection.id)}
                active={activeIndex === collection.id}
              >
                {collection.title}
              </AccordionTitle>
              <AccordionContent active={activeIndex === collection.id}>
                {collection.volumeCount > 0 ? (
                  <VolumeList
                    shelfId={collection.id}
                    accessToken={accessToken}
                  />
                ) : (
                  <p>There's nothing in this collection yet</p>
                )}
              </AccordionContent>
            </Accordion>
          );
        })}
      <CreateCollection />
    </Container>
  );
};

export default Collections;
