const beatBox = document.getElementById("beatBox");

const keyBinds = {
  kick: " ",  // space
  snare: "a",
  hiHat: "l",
  cowbell: "q",
  highTom: "i",
  midTom: "o",
  lowTom: "p",

}

var flip = 0;

const metronomeSounds = [
  new Audio("assets/audio/metronomeTap1.mp3"),
  new Audio("assets/audio/metronomeTap2.mp3"),
];

const drumPresets = {
  bedroom: {

    kick1: new Audio("assets/audio/bedroom/kick.mp3"),
    kick2: new Audio("assets/audio/bedroom/kick.mp3"),

    snare1: new Audio("assets/audio/bedroom/snare.mp3"),
    snare2: new Audio("assets/audio/bedroom/snare.mp3"),

    hiHat1: new Audio("assets/audio/bedroom/hiHat.mp3"),
    hiHat2: new Audio("assets/audio/bedroom/hiHat.mp3"),

    cowbell1: new Audio("assets/audio/bedroom/cowbell.mp3"),
    cowbell2: new Audio("assets/audio/bedroom/cowbell.mp3"),

    highTom1: new Audio("assets/audio/bedroom/highTom.mp3"),
    highTom2: new Audio("assets/audio/bedroom/highTom.mp3"),

    midTom1: new Audio("assets/audio/bedroom/midTom.mp3"),
    midTom2: new Audio("assets/audio/bedroom/midTom.mp3"),

    lowTom1: new Audio("assets/audio/bedroom/lowTom.mp3"),
    lowTom2: new Audio("assets/audio/bedroom/lowTom.mp3"),

  },

  808: {

    kick1: new Audio("assets/audio/808/kick.mp3"),
    kick2: new Audio("assets/audio/808/kick.mp3"),

    snare1: new Audio("assets/audio/808/snare.mp3"),
    snare2: new Audio("assets/audio/808/snare.mp3"),

    hiHat1: new Audio("assets/audio/808/hiHat.mp3"),
    hiHat2: new Audio("assets/audio/808/hiHat.mp3"),

    cowbell1: new Audio("assets/audio/808/cowbell.mp3"),
    cowbell2: new Audio("assets/audio/808/cowbell.mp3"),

    highTom1: new Audio("assets/audio/808/highTom.mp3"),
    highTom2: new Audio("assets/audio/808/highTom.mp3"),

    midTom1: new Audio("assets/audio/808/midTom.mp3"),
    midTom2: new Audio("assets/audio/808/midTom.mp3"),

    lowTom1: new Audio("assets/audio/808/lowTom.mp3"),
    lowTom2: new Audio("assets/audio/808/lowTom.mp3"),

  },

  pillow: {

    kick1: new Audio("assets/audio/pillow/kick.mp3"),
    kick2: new Audio("assets/audio/pillow/kick.mp3"),

    snare1: new Audio("assets/audio/pillow/snare.mp3"),
    snare2: new Audio("assets/audio/pillow/snare.mp3"),

    hiHat1: new Audio("assets/audio/pillow/hiHat.mp3"),
    hiHat2: new Audio("assets/audio/pillow/hiHat.mp3"),

    cowbell1: new Audio("assets/audio/pillow/cowbell.mp3"),
    cowbell2: new Audio("assets/audio/pillow/cowbell.mp3"),

    highTom1: new Audio("assets/audio/pillow/highTom.mp3"),
    highTom2: new Audio("assets/audio/pillow/highTom.mp3"),

    midTom1: new Audio("assets/audio/pillow/midTom.mp3"),
    midTom2: new Audio("assets/audio/pillow/midTom.mp3"),

    lowTom1: new Audio("assets/audio/pillow/lowTom.mp3"),
    lowTom2: new Audio("assets/audio/pillow/lowTom.mp3"),

  },
};

var currentDrumset = "bedroom";
var currentDrumVol = 1.0;
var currentMetronomeBPM = 120;
var currentMetronomeVol = 1.0;


const beatBox_kickArray = [
  document.getElementById("beatBox_kick1"), 
  document.getElementById("beatBox_kick2"), 
  document.getElementById("beatBox_kick3")
];

const beatBox_snareArray = [
  document.getElementById("beatBox_snare1"), 
  document.getElementById("beatBox_snare2"), 
  document.getElementById("beatBox_snare3")
];
const beatBox_hiHatArray = [
  document.getElementById("beatBox_hiHat1"), 
  document.getElementById("beatBox_hiHat2"), 
  document.getElementById("beatBox_hiHat3")
];
const beatBox_cowbellArray = [
  document.getElementById("beatBox_cowbell1"), 
  document.getElementById("beatBox_cowbell2"), 
  document.getElementById("beatBox_cowbell3")
];
const beatBox_highTomArray = [
  document.getElementById("beatBox_highTom1"), 
  document.getElementById("beatBox_highTom2"), 
  document.getElementById("beatBox_highTom3")
];
const beatBox_midTomArray = [
  document.getElementById("beatBox_midTom1"), 
  document.getElementById("beatBox_midTom2"), 
  document.getElementById("beatBox_midTom3")
];
const beatBox_lowTomArray = [
  document.getElementById("beatBox_lowTom1"), 
  document.getElementById("beatBox_lowTom2"), 
  document.getElementById("beatBox_lowTom3")
];


function barAnimation(elementArray, xy) {
  elementArray.forEach((element, index) => {
    if(xy === "x") {
      element.classList.remove("slideBack_x");
      void element.offsetWidth;
      element.style.width = "50%";
      setTimeout(() => {
        element.classList.add("slideBack_x");
      }, (100 * index))
    } else {
      element.classList.remove("slideBack_y");
      void element.offsetHeight;
      element.style.height = "50%";
      setTimeout(() => {
        element.classList.add("slideBack_y");
      }, (100 * index))
    }
  });
};

function flipSound(soundRef) {
  if(flip === 1) {
    flip = 2;
  } else {
    flip = 1;
  }
  drumPresets[currentDrumset][soundRef + flip].play();
}

var keyLock = false;

document.addEventListener("keydown", function(event) {
  if(keyLock) return;
  switch(event.key.toLowerCase()) {

    case keyBinds.kick:
      // keyLock = true;
      barAnimation(beatBox_kickArray, "y");
      flipSound("kick");
      break;

    case keyBinds.snare:
      // keyLock = true;
      barAnimation(beatBox_snareArray, "x")
      flipSound("snare");
      break;

    case keyBinds.hiHat:
      // keyLock = true;
      barAnimation(beatBox_hiHatArray, "x")
      flipSound("hiHat");
      break;

    case keyBinds.cowbell:
      // keyLock = true;
      barAnimation(beatBox_cowbellArray, "x")
      flipSound("cowbell");
      break;

    case keyBinds.highTom:
      // keyLock = true;
      barAnimation(beatBox_highTomArray, "x")
      flipSound("highTom");
      break;

    case keyBinds.midTom:
      // keyLock = true;
      barAnimation(beatBox_midTomArray, "x")
      flipSound("midTom");
      break;

    case keyBinds.lowTom:
      // keyLock = true;
      barAnimation(beatBox_lowTomArray, "x")
      flipSound("lowTom");
      break;
  }
});

document.addEventListener("keyup", function(event) {
  keyLock = false;
});







// settings 

const settingsIcon = document.getElementById("settingsIcon");

settingsIcon.onclick = function() {
  if(document.getElementById("settingsMenu")) return;

  function get_themeSelect() {
    switch(document.getElementById("beatBox").classList[0]) {
      case "solid":
        return `
          <option selected value="solid">Solid</option>
          <option value="border">Border</option>
        `;
      case "border":
        return `
          <option value="solid">Solid</option>
          <option selected value="border">Border</option>
        `;
    }
  }
  function get_curentDrumset() {
    switch(currentDrumset) {
      case "bedroom":
        return `
          <option selected value="bedroom">Bedroom</option>
          <option value="808">808</option>
          <option value="pillow">Pillow</option>
        `;
      case "808":
        return `
          <option value="bedroom">Bedroom</option>
          <option selected value="808">808</option>
          <option value="pillow">Pillow</option>
        `;
      case "pillow":
        return `
          <option value="bedroom">Bedroom</option>
          <option value="808">808</option>
          <option selected value="pillow">Pillow</option>
        `;
    }
  }
  function get_metronomeSoundStatus() {
    switch(currentMetronomeSoundStatus) {
      case true:
        return `
          <option value="disabled">Disabled</option>
          <option selected value="enabled">Enabled</option>
        `;
      case false:
        return `
          <option selected value="disabled">Disabled</option>
          <option value="enabled">Enabled</option>
        `;
    }
  }

  // function get_curentVol() {
  //   return `

  //   `;
  // }
  var settingsMenuElement = document.createElement("div");
  settingsMenuElement.id = "settingsMenu";
  settingsMenuElement.innerHTML = `
    <img src="assets/otherCloseButton_dark.png" id="settingsMenuCloseButton">
    <p class="settingsMenu_title">Settings</p>

    <p class="settingsMenu_generalSettingsTitle">Drums:</p>
    <div class="settingsmenu_optionsContainer">
      <div class="optionWrapper">
        <label for="themeSelect" title="Change the theme">Theme:</label>
        <select id="themeSelect">
          ${get_themeSelect()}
        </select>
      </div>

      <div class="optionWrapper">
        <label for="drumsetSelect" title="Change the current drumset">Drumset:</label>
        <select id="drumsetSelect">
          ${get_curentDrumset()}
        </select>
      </div>

      <div class="optionWrapper">
        <label for="drumVolSlider" title="Change the drumset volume">Volume:</label>
        <input id="drumVolSlider" type="range" min="0" max="1" step="0.1" value="${currentDrumVol}"/>
        <p id="drumVolSlider_current">${currentDrumVol}</p>
      </div>

    </div>

    <p class="settingsMenu_generalSettingsTitle">Metronome:</p>
    <div class="settingsmenu_optionsContainer">

      <div class="optionWrapper">
        <label for="metronomeBPMSlider" title="Change the volume of the metronome. WARNING: this will not take effect untill you have stopped and started the metronome again">BPM:</label>
        <input id="metronomeBPMSlider" type="range" min="60" max="240" step="5" value="${currentMetronomeBPM}"/>
        <p id="metronomeBPMSlider_current">${currentMetronomeBPM}</p>
      </div>

      <div class="optionWrapper">
        <label for="metronomeVolSlider" title="Change the metronome volume">Volume:</label>
        <input id="metronomeVolSlider" type="range" min="0" max="1" step="0.1" value="${currentMetronomeVol}"/>
        <p id="metronomeVolSlider_current">${currentMetronomeVol}</p>
      </div>

    </div>
  `;
5
  var backgroundForSettingsMenu = document.createElement("div");
  backgroundForSettingsMenu.id = "backgroundForSettingsMenu";
  backgroundForSettingsMenu.appendChild(settingsMenuElement);

  document.body.appendChild(backgroundForSettingsMenu);

  setTimeout(() => {
    document.addEventListener("click", function closeSettingsMenu(event) {
      if(event.target.id === "backgroundForSettingsMenu" || event.target.id === "settingsMenuCloseButton") {
        document.getElementById("backgroundForSettingsMenu").remove();
        document.removeEventListener("click", closeSettingsMenu);
      };
    });

    document.getElementById("themeSelect").onchange = function() {
      let newTheme = document.getElementById("themeSelect").value;
      document.getElementById("beatBox").classList = newTheme;
    }

    document.getElementById("drumsetSelect").onchange = function() {
      currentDrumset = document.getElementById("drumsetSelect").value;
    };

    document.getElementById("drumVolSlider").oninput = function() {
      currentDrumVol = document.getElementById("drumVolSlider").value;
      document.getElementById("drumVolSlider_current").innerText = currentDrumVol.padEnd(3, ".0");
      for(let preset in drumPresets) {
        let drumPreset_set = drumPresets[preset];
        for(let sound in drumPreset_set) {
          console.log(`${sound}:`, drumPreset_set[sound]);
          drumPreset_set[sound].volume = currentDrumVol;
        }
      }
    }

    document.getElementById("metronomeBPMSlider").oninput = function() {
      currentMetronomeBPM = document.getElementById("metronomeBPMSlider").value;
      document.getElementById("metronomeBPMSlider_current").innerText = currentMetronomeBPM;
      setBPM(currentMetronomeBPM);

    }


    document.getElementById("metronomeVolSlider").oninput = function() {
      currentMetronomeVol = document.getElementById("metronomeVolSlider").value;
      document.getElementById("metronomeVolSlider_current").innerText = currentMetronomeVol.padEnd(3, ".0");
      metronomeSounds.forEach((sound) => {
        sound.volume = currentMetronomeVol;
      });
    }
  }, 250);
}; 




const metronomeIcon = document.getElementById("metronomeIcon");

var metronomeInterval_time;

function setBPM(newBPM) {
  let minute = 60000;
  metronomeInterval_time = minute / newBPM;
}


var metronomeInterval;
setBPM(currentMetronomeBPM);

var beat1Element = document.createElement("div");
beat1Element.id = "beat1";

var beat2Element = document.createElement("div");
beat2Element.id = "beat2";

var beat3Element = document.createElement("div");
beat3Element.id = "beat3";

var beat4Element = document.createElement("div");
beat4Element.id = "beat4";

var beatsElementArray = [
  beat1Element,
  beat2Element,
  beat3Element,
  beat4Element,
];


metronomeIcon.onclick = function() {
  if(metronomeIcon.classList.contains("metronomeActive")) {
    console.log("off")
    metronomeIcon.classList.toggle("metronomeActive");
    clearInterval(metronomeInterval);
    beatsElementArray.forEach((beat) => {
      beat.remove();
    });
  } else {
    console.log("on")
    metronomeIcon.classList.toggle("metronomeActive");

    var beat = 1;
    metronomeInterval = setInterval(() => {
      switch(beat) {
        case 1:
          beat = 2;
          console.log("1");
          beatsElementArray.forEach((beat) => {
            beat.remove();
          });
          document.getElementById("header").appendChild(beatsElementArray[0]);
          metronomeSounds[0].play();
          break;
        case 2:
          beat = 3;
          console.log("2");
          document.getElementById("header").appendChild(beatsElementArray[1]);
          metronomeSounds[0].play();
          break;
        case 3:
          beat = 4;
          console.log("3");
          document.getElementById("header").appendChild(beatsElementArray[2]);
          metronomeSounds[0].play();
          break;
        case 4:
          beat = 1;
          console.log("4");
          document.getElementById("header").appendChild(beatsElementArray[3]);
          metronomeSounds[1].play();
          break;
      }  
    }, metronomeInterval_time);
  }
};



var darkerBackground = document.createElement("div");
darkerBackground.classList.add("darkerBackground");

var showHowToUseElement = document.createElement("div");
showHowToUseElement.id = "showHowToUseElement";
showHowToUseElement.innerHTML = `
  <p class="showHowToUse_title">How to use</p>
  <p class="showHowToUse_keybindsTitle">Keybinds:</p>
  <ul class="showHowToUse_keybindsList">
    <li>Kick => spacebar</li>
    <li>Snare => A</li>
    <li>HiHat => L</li>
    <li>Cowbell => Q</li>
    <li>HighTom => I</li>
    <li>MidTom => O</li>
    <li>LowTom => P</li>
  </ul>
  <p class="showHowToUse_settingsText">Use the settings to customize drum sounds, adjust volume levels, and adjust the metronome.</p>
  <div id="showHowToUse_okGotItButton" onclick="closeOverlay()"><p>Got it</p></div>
`;
darkerBackground.appendChild(showHowToUseElement);

document.body.appendChild(darkerBackground);


function closeOverlay() {
  darkerBackground.remove();
}




// resize checker

function checkResize() {
  if(window.innerHeight > window.innerWidth) {
    var wrongScreenAspectRatioElement = document.createElement("div");
    if(!document.getElementById("wrongScreenAspectRatioElement")) {
      wrongScreenAspectRatioElement.innerHTML = `
        <p class="wrongScreenAspectRatioElement_firstText">Hold on a second</p>
        <p class="wrongScreenAspectRatioElement_lastText">Your screen height is larger than your screen width. Tip Tap Beats was designed for laptop / monitors. Maybe in a future version _(0.0)/ </p>
      `;
      wrongScreenAspectRatioElement.id = "wrongScreenAspectRatioElement";
      document.body.appendChild(wrongScreenAspectRatioElement);
    }
  } else {
    if(document.getElementById("wrongScreenAspectRatioElement")) {
      setTimeout(() => {
        try {
          document.getElementById("wrongScreenAspectRatioElement").remove();
        } catch {}
      }, 150);
    }
  }
}

checkResize();
window.addEventListener("resize", checkResize);