import { Location } from '../../types/Job';
// @ts-ignore  
import { Map as Mapbox, Marker } from 'pigeon-maps';
import React from 'react';
import styles from './Map.module.css';

type Props = {
  location: Location;
}

export const Map: React.NamedExoticComponent<Props> = React.memo(({ location }) => {
  const { lat, long } = location;
 
  return (
    <Mapbox
      boxClassname={styles.map}
      height={200}
      defaultCenter={[lat, long]}
      defaultZoom={4} 
      attribution={false}
      attributionPrefix={false}
    >
      <Marker anchor={[lat, long]} offset={[13, 36]}>
        <svg width="26" height="36" viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26 11.7C26 5.23827 20.1797 0 13 0C5.8203 0 0 5.23827 0 11.7C0 15.8164 3.95671 23.3953 11.8701 34.4368L13 36L14.6756 33.6721L15.2347 32.8813C22.4116 22.6805 26 15.6201 26 11.7ZM6.5 12.5217C6.5 9.06396 9.41015 6.26087 13 6.26087C16.5899 6.26087 19.5 9.06396 19.5 12.5217C19.5 15.9795 16.5899 18.7826 13 18.7826C9.41015 18.7826 6.5 15.9795 6.5 12.5217Z" fill="#fff"/>
      </svg>
      </Marker>
    </Mapbox>
  )
})