import { useEffect, useState } from "react";
import {
  Container,
  Accordion,
  AccordionTitle,
  AccordionContent,
  Menu,
} from "semantic-ui-react";

import CreateCollection from "../Components/CreateCollection";

const Collections = (props) => {
  const [collections, setCollections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const accessToken = JSON.parse(
    sessionStorage.getItem("accessToken")
  ).access_token;

  const onAccordionClick = (shelfId) => {
    setActiveIndex(shelfId);
  };

  useEffect(() => {
    const getVolumes = async (shelfId) => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/mylibrary/bookshelves/${shelfId}/volumes`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const data = await res.json();

        return data;
      } catch (err) {
        console.error(err);
      }
    };
    const getShelves = async () => {
      try {
        const res = await fetch(
          "https://www.googleapis.com/books/v1/mylibrary/bookshelves",
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    getShelves().then((result) => {
      const shapedCollections = result.items.map((collection) => {
        const volumes = [];
        if (collection.volumeCount > 0) {
          getVolumes(collection.id).then((res) => {
            volumes.push(res.items);
          });
        }
        return {
          id: collection.id,
          title: collection.title,
          volumeCount: collection.volumeCount,
          volumes: volumes,
        };
      });
      setCollections(shapedCollections);
      setActiveIndex(shapedCollections[0].id);
    });
  }, [accessToken, collections.length]);

  return (
    <Container>
      {collections.length > 0 &&
        collections.map((collection) => {
          return (
            <Accordion key={collection.id} as={Menu} vertical fluid styled>
              <AccordionTitle
                onClick={() => onAccordionClick(collection.id)}
                active={activeIndex === collection.id}
              >
                {collection.title}
              </AccordionTitle>
              <AccordionContent active={activeIndex === collection.id}>
                {collection.volumes[0] ? (
                  collection.volumes[0].map((volume) => (
                    <p>{volume.volumeInfo.title}</p>
                  ))
                ) : (
                  <p>Yikes, there's nothing in this collection</p>
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
