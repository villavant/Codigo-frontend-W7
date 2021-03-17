let selected = document.getElementById("idSelect");
let title = document.getElementById('idTittle');
let lyrics = document.getElementById('idlyrics');
let lhtml = document.documentElement;
console.log(lhtml);

selected.addEventListener("change", setSong);

function setSong() {
    let item = selected.value;
    console.log(item)
    if (item === "marry-the-night") {
        lhtml.classList.add("bkg-lady");
        title.textContent = "Marry the night - Lady Gaga";
        lyrics.textContent = `I'm gonna marry the night
            I won't give up on my life
        I'm a warrior queen
        Live passionately tonight
        I'm gonna marry the dark
        Gonna make love to the stark

        I'm a soldier to my own emptiness
        I am a winner
        I'm gonna marry the night
        I'm gonna marry the night
        I'm gonna marry the night
        I'm gonna marry the night
        I'm not gonna cry anymore
        I'm gonna marry the night

        Leave nothing on these streets to explore
        M-m-m-marry m-m-m-marry m-m-m-marry the night
        Oh m-m-marry m-m-m-marry m-m-m-marry the night
        I'm gonna lace up my boots
        Throw on some leather and cruise
        Down the street that I love
        In my fishnet gloves
        I'm a sinner`;
    } else if (item === "maniac") {
        lhtml.classList.add("bkg-maniac");
        title.textContent = "Maniac - Conan Gray";
        lyrics.textContent = `You were with your friends partying
        When the alcohol kicked in
        Said you wanted me dead
        So, you show up at my home, all alone
        With a shovel and a rose
        Do you think I'm a joke?

        'Cause people like you always want back what they can't have
        But I'm past that and you know that
        So you should turn back to your outback tellin' them trash

        Tell all of your friends that I'm crazy and drive you mad
        That I'm such a stalker, a watcher, a psychopath
        Then tell them you hate me and dated me just for laughs
        So, why do you call me and tell me you want me back?
        You maniac`
    } else if (item === "adore-you") {
        title.textContent = "Adore you - Harry Styles ";
        lhtml.classList.add("bkg-harry");
        lyrics.textContent = `Honey
        I'd walk through fire for you
        Just let me adore you
        Oh, honey
        I'd walk through fire for you
        Just let me adore you
        Like it's the only thing I'll ever do
        Like it's the only thing I'll ever do

        Your wonder under summer skies (summer skies)
        Brown skin and lemon over ice
        Would you believe it?`
    } else if (item === "future-nostalgea") {
        title.textContent = "Future Nostalgia";
        lyrics.textContent = `You want a timeless song, I wanna change the game
        Like modern architecture, John Lautner coming your way
        I know you like this beat 'cause Jeff been doing the damn thing
        You wanna turn it up loud, future nostalgia is the name
        (Future nostalgia)

        I know you're dying trying to figure me out
        My name's on the tip of your tongue, keep running your mouth
        You want the recipe but can't handle my sound
        My sound, my sound (future)`;
    } else if (item === "xs") {
        title.textContent = "XS - Rina Sawayana";
        lyrics.textContent = `Hey, I want it all, don't have to choose
        And when the heart wants what it wants, what can I do?
        So, I'll take that one, that one, yeah, that one too
        Luxury and opulence
        Cartiers and Tesla Xs
        Calabasas, I deserve it
        Call me crazy, call me selfish
        I'm the baddest and I'm worth it
        Gimme just a little bit (more)
        Little bit of (excess)`
    } else {
        title.textContent = "Selecciona una canción"
    }
}