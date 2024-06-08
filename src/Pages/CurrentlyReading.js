import { Card, Container, Image } from "semantic-ui-react";

const CurrentlyReading = () => {
  return (
    <>
      <Container>
        <Card fluid>
          <Card.Content>
            <Card.Header content="The Girl From Guernica" />
            <Image
              src="http://books.google.com/books/content?id=oEtXEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
              alt="The Girl From Guernica"
            />
            <Card.Meta content="Karen Robards" />
            <Card.Description>
              "Inspired by Picasso’s great masterpiece Guernica, New York Times
              bestselling author Karen Robards returns with a riveting story of
              love, intrigue, deception and bravery in the face of war… On an
              April day in 1937, the sky opens and fire rains down upon the
              small Spanish town of Guernica. Seventeen-year-old Sibi and her
              family are caught up in the horror. Griff, an American military
              attaché, pulls Sibi from the wreckage, and it’s only the first
              time he saves her life in a span of hours. When Germany claims no
              involvement in the attack, insisting the Spanish Republic was
              responsible, Griff guides Sibi to lie to Nazi officials. If she or
              her sisters reveal that they saw planes bearing swastikas, the
              gestapo will silence them—by any means necessary. As war begins to
              rage across Europe, Sibi joins the underground resistance,
              secretly exchanging information with Griff. But as the scope of
              Germany’s ambitions becomes clear, maintaining the facade of a
              Nazi sympathizer becomes ever more difficult. And as Sibi is drawn
              deeper into a web of secrets, she must find a way to outwit an
              enemy that threatens to decimate her family once and for all.
              Masterfully rendered and vividly capturing one of the most
              notorious episodes in history, The Girl from Guernica is an
              unforgettable testament to the bonds of family and the courage of
              women in wartime."
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};

export default CurrentlyReading;
