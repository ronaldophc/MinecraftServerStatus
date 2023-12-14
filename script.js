async function getServer(ip) {
    try {
        const response = await axios.get(`https://api.mcsrvstat.us/3/${ip}`);
        const data = response.data;
        const div = document.getElementById('results');
        div.innerHTML = '';
        console.log(data);
        if (data.online == true) {
            const on = document.createElement('p');
            on.textContent = 'Servidor online';
            div.appendChild(on);
            if (data.motd && data.motd.clean) {
                const motdClean = `MOTD: ${data.motd.clean}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = motdClean;
                div.appendChild(paragraph);
            }
            if (data.hostname) {
                const hostname = `Hostname: ${data.hostname}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = hostname;
                div.appendChild(paragraph);
            }
            if (data.version) {
                const version = `Version: ${data.version}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = version;
                div.appendChild(paragraph);
            }
            if (data.software) {
                const jar = `Jar used: ${data.software}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = jar;
                div.appendChild(paragraph);
            }
            if (data.players.online) {
                const players = `Players online: ${data.players.online}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = players;
                div.appendChild(paragraph);
            }
            if (data.plugins) {
                const pluginsInfo = `Plugins: ${data.plugins}`;
                const pluginsParagraph = document.createElement('p');
                pluginsParagraph.textContent = pluginsInfo;
                div.appendChild(pluginsParagraph);
            }
            if (data.mods) {
                const modsInfo = `Mods: ${data.mods}`;
                const modsParagraph = document.createElement('p');
                modsParagraph.textContent = modsInfo;
                div.appendChild(modsParagraph);
            }
        } else {
            const on = document.createElement('p');
            on.textContent = 'Servidor offline';
            div.appendChild(on);
        }
    } catch (error) {
        console.log(error);
    }
}
const submit = document.getElementById('submit');
const input = document.getElementById('ip');
submit.addEventListener("click", function (e) {
    e.preventDefault();
    getServer(input.value);
});