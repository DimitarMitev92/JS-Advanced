function timeToWalk(steps, footMeters, speed) {
    const walkingMeters = steps * footMeters;
    const breakMinutes = Math.floor(walkingMeters / 500);
    const speedMperSecond = speed * 1000 / 3600;
    const seconds = walkingMeters / speedMperSecond;
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60) + breakMinutes;
    const s = Math.ceil(seconds % 60);
    const hDisplay = h > 9 ? `${h}` : `0${h}`;
    const mDisplay = m > 9 ? `${m}` : `0${m}`;
    const sDisplay = s > 9 ? `${s}` : `0${s}`;
    console.log(`${hDisplay}:${mDisplay}:${sDisplay}`);
}