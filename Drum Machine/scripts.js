import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const heaterSounds = [
    {
        keyCode: 81,
        key: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 87,
        key: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyCode: 69,
        key: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keyCode: 65,
        key: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keyCode: 83,
        key: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keyCode: 68,
        key: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keyCode: 90,
        key: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keyCode: 88,
        key: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keyCode: 67,
        key: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

const pianoSounds = [
    {
        keyCode: 81,
        key: 'Q',
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
        keyCode: 87,
        key: 'W',
        id: 'Chord-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
        keyCode: 69,
        key: 'E',
        id: 'Chord-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
        keyCode: 65,
        key: 'A',
        id: 'Shaker',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
        keyCode: 83,
        key: 'S',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
        keyCode: 68,
        key: 'D',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
        keyCode: 90,
        key: 'Z',
        id: 'Punchy-Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
        keyCode: 88,
        key: 'X',
        id: 'Side-Stick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
        keyCode: 67,
        key: 'C',
        id: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
];

const soundsName = {
    heaterKit: "Heater Kit",
    smoothPianoKit: "Smooth Piano Kit"
};

const soundsGroup = {
    heaterKit: heaterSounds,
    smoothPianoKit: pianoSounds
}

const KeyboardKey = ({ play, deactivateAudio, sound: { id, key, url, keyCode } }) => {
    const handleKeydown = (e) => {
        if (keyCode === e.keyCode) {
            const audio = document.getElementById(key);
            play(key, id);
            deactivateAudio(audio)
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeydown);
    }, [])

    return (
        <button value="test" id={keyCode} className="drum-pad" onClick={() => play(key, id)}>
            <audio className="clip" src={url} id={key} />
            {key}
        </button>
    );
}

const Keyboard = ({ sounds, play, power, deactivateAudio }) => (
    <div className="keyboard">
        {power
            ? sounds.map((sound) => <KeyboardKey sound={sound} play={play} deactivateAudio={deactivateAudio} />)
            : sounds.map((sound) => <KeyboardKey sound={{ ...sound, url: "#" }} play={play} deactivateAudio={deactivateAudio} />)
        }
    </div>
);

const DrumControls = ({ stop, name, power, volume, handleVolumeChange, changeSoundGroup }) => (
    <div className="controller">
        <button onClick={stop}>Turn Sound {power ? 'OFF' : 'ON'}</button>
        <h2>Volume: %{Math.round(volume * 100)}</h2>
        <input
            max="1"
            min="0"
            step='0.01'
            type="range"
            value={volume}
            onChange={handleVolumeChange}
        />
        <h2 id="display" >{name}</h2>
        <button onClick={changeSoundGroup}>Change Instrument</button>
    </div>
);

const App = () => {
    const [power, setPower] = React.useState(true);
    const [volume, setVolume] = React.useState(1);
    const [soundName, setSoundName] = React.useState("");
    const [soundType, setSoundType] = React.useState("heaterKit");
    const [sounds, setSounds] = React.useState(soundsGroup[soundType]);

    const styleActiveKey = (key) => {
        key.parentElement.style.backgroundColor = "#1d002e"
        key.parentElement.style.color = "#fc05be"
    }

    const deActivatedKey = (audio) => {
        audio.parentElement.style.backgroundColor = "#1d002e"
        audio.parentElement.style.color = "#fc05be"
    }

    const deactivateAudio = (audio) => {
        setTimeout(() => {
            audio.parentElement.style.backgroundColor = "#1d002e"
            audio.parentElement.style.color = "#fc05be"
        }, 300)
    }

    const play = (key, sound) => {
        setSoundName(sound)
        const audio = document.getElementById(key);
        styleActiveKey(audio);
        audio.currentTime = 0;
        audio.play();
        deactivateAudio(audio)
    }

    const stop = () => {
        setPower(!power)
    }

    const changeSoundGroup = () => {
        setSoundName("")
        if (soundType === "heaterKit") {
            setSoundType("smoothPianoKit");
            setSounds(soundsGroup.smoothPianoKit);
        } else {
            setSoundType("heaterKit");
            setSounds(soundsGroup.heaterKit);
        }
    }

    const handleVolumeChange = e => {
        setVolume(e.target.value)
    }

    const setKeyVolume = () => {
        const audioes = sounds.map(sound => document.getElementById(sound.key));
        audioes.forEach(audio => {
            if (audio) {
                audio.volume = volume;
            }
        })
    }

    return (
        <div id="drum-machine">
            {setKeyVolume()}
            <div className="wrapper">
                <Keyboard sounds={sounds} play={play} power={power} deactivateAudio={deactivateAudio} />
                <DrumControls
                    stop={stop}
                    power={power}
                    volume={volume}
                    name={soundName || soundsName[soundType]}
                    changeSoundGroup={changeSoundGroup}
                    handleVolumeChange={handleVolumeChange}
                />
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#app"))