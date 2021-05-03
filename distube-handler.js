module.exports = (client, Discord, ee) => {
    client.distube
    .on("error", (message, error) => {
        console.log(error)
    })
    .on("playSong", (message, queue, song) => {
        if(!client.playcmd) return;
        client.playcmd = false;
        message.channel.send(`:notes: Started Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`)
    })
    .on("playList", (message, queue, song) => {
        if(!client.playcmd) return;
        client.playcmd = false;
        message.channel.send(`:notes: Started Playing \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\``)
    })
    .on("addSong", (message, queue, song) => {
        if(!client.playcmd) return;
        client.playcmd = false;
        message.channel.send(`:musical_note: Added track: \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`)
    })
    .on("addList", (message, queue, song) => {
        if(!client.playcmd) return;
        client.playcmd = false;
        message.channel.send(`::musical_note: Added Playlist: \`${playlist.name}\` (${playlist.songs.length} songs).\nRequested by: ${song.user}`)
    })
    .on("initQueue", queue => {
        console.log("STARTED PLAYING A WAITINGROOM TRACK")
        queue.autoplay = false;
        queue.loop = 2;
        queue.volume = 20;
    })
}