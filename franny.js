const storyData = {};

storyData.franny = {
    start: {
        text: `You sit across from Lane in a crowded restaurant. Lane is spouting about his English paper, and each word visibly agitates you. So, you retreat to the Jesus Prayer, muttering "Lord Jesus Christ, have mercy on me" under your breath.`,
        choices: [
            {
                text: "Continue to repeat the prayer quietly in your head, hoping it will bring peace.",
                next: "repeatPrayer",
            },
            {
                text: "Pause and try to explain to Lane what you’re feeling, even though you know he won’t understand.",
                next: "talkToLane",
            },
            { text: "Excuse yourself and step outside", next: "stepOutside" },
        ],
    },
    repeatPrayer: {
        text: `You repeat it, over and over. The words start to become second nature, but you don't feel as if the words are gifting you any clarity. You hear Lane still droning about his paper; he sounds awfully like a section man.`,
        choices: [
            {
                text: "Double down. Repeat it louder in your head.",
                next: "whiteNoise",
            },
            {
                text: "You've had enough of Lane. Excuse yourself and step outside.",
                next: "stepOutside",
            },
        ],
        quote: `You’re talking like a section man (Salinger, 13).`,
    },
    talkToLane: {
        text: `Lane's eyes glaze over. You attempt to explain your frustration with the inauthenticity of the academic world. You explain that you use the Jesus Prayer as a means of seeking repentance. Not for any specific sins, but for the disillusionment you feel with the worlds you were once so close to: academia and performance. Your eyes begin to tear up; meanwhile, Lane looks both confused and disinterested.`,
        choices: [
            { text: "Excuse yourself and step outside", next: "stepOutside" },
            { text: "Retreat back to the Jesus Prayer", next: "repeatPrayer" },
        ],
    },
    stepOutside: {
        text: `The cold air outside stings your skin. The reprieve from Lane's blathering is much enjoyed.`,
        choices: [
            {
                text: "Call Zooey and ask him about the prayer",
                next: "callZooey",
            },
            {
                text: "Collapse onto a bench and keep praying",
                next: "whiteNoise",
            },
        ],
    },
    callZooey: {
        text: `Zooey picks up. He listens patiently and then tells you that you've misunderstood the point of the prayer. It's not meant to be a magic spell to erase your discomfort. Rather, it's a surrender, a relinquishing of the self. He urges you to stop seeking salvation through repetition and instead start living differently.`,
        choices: [
            {
                text: "Reflect on his words and try to change your behavior",
                next: "returnChanged",
            },
            {
                text: "Ignore him and keep praying anyway",
                next: "missedThePoint",
            },
            {
                text: "Ask what he means by 'living differently'",
                next: "askZooey",
            },
        ],
        quote: `In going ahead with the Jesus
Prayer—just let me finish, now, please—in going ahead with the Jesus Prayer, aren’t you trying to lay up some kind of treasure? Something
that’s every goddam bit as negotiable as all
those other, more material things? (Salinger, 125).`,
    },
    askZooey: {
        text: `Zooey sighs. "It means stop making your suffering sacred. Stop turning your despair into some kind of holy condition. Stop using the prayer for your own selfish gain. Help someone. Listen to someone. Live like the prayer means something." You sit with that.`,
        choices: [
            {
                text: "Ignore him and keep praying anyway",
                next: "missedThePoint",
            },
            {
                text: "Enter the restaurant and try to revive the conversation with Lane",
                next: "returnChanged",
            },
        ],
    },
    whiteNoise: {
        text: `The prayer becomes white noise. Rather than bestowing you a deeper sense of understanding, you are lost in your own head.`,
        lesson: "Repentance without introspection becomes a mindless routine. It leads to spiritual stagnation instead of growth.",
        choices: [],
    },
    askHimToLeave: {
        text: `You ask Lane to leave. He stares at you, baffled, and then scoffs, grabbing his Burberry coat. You're alone now. It's quieter, but it doesn't feel any better.`,
        choices: [
            { text: "Try to return to the prayer", next: "repeatPrayer" },
            { text: "Step outside", next: "stepOutside" },
        ],
    },
    missedThePoint: {
        text: "You've missed the point of the Jesus Prayer. Instead of using it to inspire altruistic change within you, you are using it as a retreat: a way to hide behind your ironically egotistical view of the world without taking any real action. You keep mumbling the words, hoping clarity will arrive, but it never will.",
        lesson: "True repentance requires action and humility. Using spirituality to avoid engaging with the world is ego in disguise.",
        choices: [],
    },
    returnChanged: {
        text: `You return to the restaurant. Lane is still talking, but you see him differently now; not as a symbol of everything wrong, but as a person trying. As a person just as equally deserving of my love as anyone else. You don't say anything, but you listen. This time, the prayer is silent in your heart, not as escape, but as grounding.`,
        lesson: "Abondonment of repentance may contirubte to the most necessary change. Here, that is Franny seeing she must embody the Jesus Prayer instead of blindly reciting it.",
        choices: [],
    },
};
