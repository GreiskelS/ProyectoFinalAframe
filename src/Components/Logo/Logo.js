import React from "react";

const Logo = () => {
  const usuarioLogeado = true;

  const handleLogoClick = () => {
    if (!usuarioLogeado) {

      alert("Haz login para disfrutar de la experiencia inmersiva");
    } else {
      window.location.href = "/Inmersive";
    }
  };

  return (
    <div>
      <a-scene cursor="rayOrigin: mouse">
        <a-light type="ambient" intensity="0.9"></a-light>

        <a-entity>
          <a-cursor
            id="cursor"
            cursor="fuse: false; rayOrigin: mouse"
            raycaster="objects: #logo"></a-cursor>
        </a-entity>

        <a-entity
          id="logo"
          position="-0 1.8 -1.5"
          rotation="20 120 -60"
          scale="50 50 50"
          modify-materials
          animation-mixer="clip: *; loop: true"
          play-all-model-animations
          gltf-model="https://cdn.glitch.global/32e0a0b5-d4a0-44fd-8422-65f2983beb08/peludo4.glb?v=1694434088289"
          onClick={handleLogoClick}
        ></a-entity>

        <a-text value="INMERSIVA" position="-0.09 1.7 -1" scale="0.15 0.15 0.15" opacity="0.7">⬆️</a-text>
        <a-text value="<click>" position="-0.06 1.75 -1" scale="0.17 0.17 0.17" opacity="0.9">⬆️</a-text>

        <a-sky src="https://cdn.glitch.global/32e0a0b5-d4a0-44fd-8422-65f2983beb08/FONDOFINAL.JPG?v=1694435785858" rotation="0 -80 0" position="0 -10 -70" material="" geometry=""></a-sky>
      </a-scene>
    </div>
  );
};

export default Logo;