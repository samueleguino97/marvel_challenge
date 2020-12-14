import Image from "next/image";
import React, { useRef, useState } from "react";

function Character({ character, onClick = () => null }) {
  const [isHovering, setIsHovering] = useState(false);

  const overlayRef = useRef();
  return (
    <div
      className="character"
      style={{ position: "relative" }}
      key={character.id}
      onMouseLeave={() => {
        if (overlayRef.current) {
          overlayRef.current.className += " out-shrink";
        }
        setTimeout(() => setIsHovering(false), 180);
      }}
    >
      {character?.thumbnail && (
        <Image
          alt="character"
          src={
            character?.thumbnail?.path +
            "/detail." +
            character?.thumbnail?.extension
          }
          width={140}
          height={140}
          layout="fixed"
          onMouseEnter={() => setIsHovering(true)}
        />
      )}
      {character.name}
      {isHovering && (
        <div onClick={onClick} ref={overlayRef} className={`character-overlay`}>
          <Image
            alt="character"
            src={
              character?.thumbnail?.path +
              "/detail." +
              character?.thumbnail?.extension
            }
            layout="fill"
          />
          <span className="name-overlay"> {character.name}</span>
        </div>
      )}
    </div>
  );
}

export default Character;
