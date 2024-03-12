import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'

const getAbility = (abilityId) => {
  const url = `https://pokeapi.co/api/v2/ability/${abilityId}`;
  return axios.get(url);
};
export const PokeAbility = ({ abilityId }) => {
  const [ability, setAbility] = React.useState(null);

  useEffect(() => {
    getAbility(abilityId).then((response) => {
      setAbility(response.data);
    });
  }, [abilityId]);

  return (
    <div>
      {ability && (
        <div>
          <h2>{ability.name}</h2>
          <p>{ability.description}</p>
        </div>
      )}
    </div>
  )
}
