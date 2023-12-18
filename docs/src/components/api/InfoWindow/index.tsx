import { GoogleMap, InfoWindow, Marker } from "react-google-map-wrapper";

import { Container } from "../../Container";
import { useState } from "react";

const uluru = { lat: -25.363, lng: 131.044 };

function Content() {
  return (
    <div id="content" style={{ color: '#000' }}>
      <div id="siteNotice"></div>
      <h1 id="firstHeading" className="firstHeading">Uluru</h1>
      <div id="bodyContent">
        <p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p>
        <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p>
      </div>
    </div>
  );
}

export function InfoWindowEx() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <GoogleMap
        className='h-[400px]'
        zoom={4}
        center={uluru}
      >
        <InfoWindow ariaLabel='Uluru' content={<Content />} onCloseClick={() => setOpen(false)} open={isOpen}>
          <Marker {...uluru} title='Uluru (Ayers Rock)' onClick={() => setOpen(true)} />
        </InfoWindow>
      </GoogleMap>
    </Container>
  );
}
