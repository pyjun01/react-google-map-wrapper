import { ApiLoadConfig, LibraryName } from '../types';

let isCalled = false;

export const appendLibImportScript = ({ apiKey, v = 'weekly', libraries, language, region, authReferrerPolicy }: ApiLoadConfig) => {
  if (isCalled) {
    return;
  }
  isCalled = true;

  const script = document.createElement('script');

  const lib = Array.from(new Set<LibraryName>((['maps', 'core'] as LibraryName[]).concat(libraries ?? []))).join(',');

  // code from https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
  script.innerHTML = `(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=\`https://maps.\${c}apis.com/maps/api/js?\`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));if(m.querySelector("script[nonce]")){a.nonce=m.querySelector("script[nonce]").nonce}else{a.nonce=""};m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({key: "${apiKey}",v: "${v}",libraries: "${lib}",${
    language ? `language: "${language}",` : ''
  }${region ? `region: "${region}",` : ''}${authReferrerPolicy ? `authReferrerPolicy: "${authReferrerPolicy}",` : ''}});`;

  document.head.append(script);
};
