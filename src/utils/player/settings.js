const settings = (queue) => {
    const loop = queue.repeatMode ? (queue.repeatMode === 2 ? 'All' : 'Single') : 'Off';
    const volume = queue.node.volume;
    const track = queue.currentTrack;
    const author = track.author;
    const timestamp = queue.node.getTimestamp();
    const trackDuration = timestamp.progress == 'Forever' ? 'Endless (Live)' : track.duration;

    return `Author : **${author}**\nDuration **${trackDuration}**\n`
        + `────────────────────\n`
        + `Volume: \`${volume}%\` | Loop: \`${loop}\``;
};

module.exports.settings = settings;