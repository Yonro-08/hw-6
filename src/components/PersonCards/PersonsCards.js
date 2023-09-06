import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";

import PersonCard from "./PersonCard/PersonCard";

export default function PersonsCards() {
  const [persons, setPersons] = useState([]);

  const getData = async () => {
    return await fetch("https://randomuser.me/api?results=10").then(
      (response) => response.json().then((data) => setPersons(data.results))
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="10px" padding="20px">
      {persons.map((person, index) => {
        return (
          <PersonCard
            key={index}
            avatarUrl={person.picture.large}
            name={person.name.first + " " + person.name.last}
            email={person.email}
            age={person.dob.age}
          />
        );
      })}
    </Grid>
  );
}
