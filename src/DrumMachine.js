import React, { useState } from "react";
import { useEffect } from "react";

const firstSoundGroup = [
  {
    keyCode: 81,
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    buttonColor: "rgb(0, 236, 251",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    buttonColor: "rgb(0, 184, 230",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    buttonColor: "rgb(34, 121, 201",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    buttonColor: "rgb(98, 17, 187",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    buttonColor: "rgb(139, 54, 236",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    buttonColor: "rgb(190, 54, 178",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    buttonColor: "rgb(238, 53, 111",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    buttonColor: "rgb(241, 88, 74",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    buttonColor: "rgb(242, 167, 54",
  },
];

const secondSoundGroup = [
  {
    keyCode: 81,
    key: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    buttonColor: "rgb(0, 236, 251",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    buttonColor: "rgb(0, 184, 230",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    buttonColor: "rgb(34, 121, 201",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    buttonColor: "rgb(98, 17, 187",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    buttonColor: "rgb(139, 54, 236",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    buttonColor: "rgb(190, 54, 178",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    buttonColor: "rgb(238, 53, 111",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    buttonColor: "rgb(241, 88, 74",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    buttonColor: "rgb(242, 167, 54",
  },
];

const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit",
};

const soundsGroup = {
  heaterKit: firstSoundGroup,
  smoothPianoKit: secondSoundGroup,
};

const KeyboardKey = ({
  play,
  power,
  sound: { keyCode, key, url, id, buttonColor },
}) => {
  let styleBackgroundPads = `radial-gradient(circle, ${buttonColor}) 0%, ${buttonColor},0.4) 100%)`;
  function styleHoverIn(e) {
    e.target.style.background = buttonColor;
  }

  function styleHoverOut(e) {
    e.target.style.background = styleBackgroundPads;
  }

  function stylingOnClick(e) {
    if (power) {
      e.target.style.background = buttonColor;
      e.target.style.boxShadow = `2px 2px 10px ${buttonColor}`;
      setTimeout(() => {
        e.target.style.boxShadow = "none";
        e.target.style.background = styleBackgroundPads;
      }, 100);
      play(key, id);
    } else {
      play(key, id);
    }
  }

  function findButton(currentKeyCode) {
    let buttonsCollection = document.getElementsByClassName("drum-pad");
    for (let i = 0; i < buttonsCollection.length; i++) {
      if (buttonsCollection[i].id == currentKeyCode)
        return buttonsCollection[i];
    }
  }


  function handleKeydown(e) {
    let powerCheck = document.getElementById("powerSwitch").checked;
    if (keyCode === e.keyCode) {
      if (findButton(e.keyCode)) {
        if (powerCheck) {
          findButton(e.keyCode).style.background = buttonColor;
          findButton(e.keyCode).style.boxShadow = `2px 2px 10px ${buttonColor}`;
          setTimeout(() => {
            findButton(e.keyCode).style.background = styleBackgroundPads;
            findButton(e.keyCode).style.boxShadow = "none";
          }, 100);
        }
      }
      play(key, id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);
  return (
    <button
      className={`drum-pad ${power ? "able" : "disable"}`}
      id={keyCode}
      key={key}
      onMouseEnter={() => (power ? styleHoverIn : "")}
      onMouseLeave={() => (power ? styleHoverOut : "")}
      onClick={stylingOnClick}
      style={{
        background: power
          ? `radial-gradient(circle, ${buttonColor}) 0%, ${buttonColor},0.4) 100%)`
          : "transparent",
      }}
    >
      <audio className="clip" id={key} src={url} />
      {key}
    </button>
  );
};

const Keyboard = ({ play, sounds, power }) => {
  return (
    <div className="keys">
      {power
        ? sounds.map((sound) => (
            <KeyboardKey play={play} sound={sound} power={power} />
          ))
        : sounds.map((sound) => (
            <KeyboardKey
              play={play}
              sound={{
                ...sound,
                url: "http://www.sonidosmp3gratis.com/sounds/bambu_1.mp3",
              }}
              power={power}
            />
          ))}
    </div>
  );
};

const DumControle = ({
  name,
  changeSoundGroup,
  volume,
  handleVolume,
  power,
  handlePower,
}) => {
  return (
    <div className="control">
      <div className="powerButton">
        <p>
          <strong>{power ? "On" : "Off"}</strong>
        </p>
        <label className="switch">
          <input type="checkbox" onClick={handlePower} id="powerSwitch" />
          <span className="slider" />
        </label>
      </div>
      <input
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={handleVolume}
      />
      <p>Volume: %{Math.round(volume * 100)}</p>
      {power ? <h2 id="display">{name}</h2> : <h3>Turn on the machine</h3>}
      <button className="btnChangeSoundGroup" onClick={changeSoundGroup}>
        Try other sounds
      </button>
    </div>
  );
};

const DrumMachine = () => {
  const [soundType, setSoundType] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);
  const [soundName, setSoundName] = useState("");
  const [volume, setVolume] = useState(0.5);
  const [power, setPower] = useState(false);

  const handlePower = () => {
    setPower(!power);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const handleKeyVolume = () => {
    const audios = sounds.map((sound) => document.getElementById(sound.key));
    audios.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  const changeSoundGroup = () => {
    setSoundName("");
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  return (
    <div id="drum-machine">
      {handleKeyVolume()}
      <Keyboard sounds={sounds} play={play} power={power} />
      <DumControle
        handlePower={handlePower}
        power={power}
        volume={volume}
        handleVolume={handleVolume}
        changeSoundGroup={changeSoundGroup}
        name={soundName || soundsName[soundType]}
      />
    </div>
  );
};

export default DrumMachine;
