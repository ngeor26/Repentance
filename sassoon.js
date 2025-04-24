storyData.sassoon = {
    start: {
        text: `You stand at the threshold of return. The war you denounced still churns on without you. The system wants you back. Duty claws at your conscience, but beneath it all, a quieter urge: to suffer for what you’ve said, for leaving the men behind.`,
        choices: [
            {
                text: "Return to the front. You must repent for the battles fought in your absence, the men you left to die.",
                next: "returnToFront",
            },
            { text: "Talk to Rivers one last time", next: "talkToRivers" },
            {
                text: "Refuse and leave military life altogether",
                next: "leaveMilitary",
            },
        ],
    },
    returnToFront: {
        text: `You return. Mud, screams, and death await. Every step back into the trenches feels like a confession: not of loyalty, but of guilt. You tell yourself you must share their fate. That to protest and live while others die is a sin you cannot bear.`,
        choices: [
            {
                text: "Serve silently, accepting your punishment",
                next: "serveSilently",
            },
            {
                text: "Withdraw emotionally and disappear inside your uniform",
                next: "withdrawEmotionally",
            },
        ],
    },
    talkToRivers: {
        text: `"Tell me," Rivers says, "why is it you want to return to the fight? Are your confidences restored in the necessity of this war? No, I know that's not it. Do you wish to rejoin the men you left behind for the protest? If so, I know it’s not to lead them. It’s to suffer beside them. You don’t want to serve. You want to be punished. That’s not duty, Sassoon. That’s despair."`,
        choices: [
            { text: "Admit it and still return", next: "returnToFront" },
            {
                text: "Ask Rivers if he thinks it’s cowardice to stay",
                next: "riversCowardice",
            },
            { text: "Say nothing and walk out", next: "withdrawEmotionally" },
        ],
    },
    riversCowardice: {
        text: `He pauses, then speaks slowly, deliberately.  
    “Cowardice?” he repeats. “No. Cowardice would be lying to yourself about why you went back. Staying requires its own kind of courage. To live with what you’ve seen, to speak against it and not fold under the guilt… that’s not cowardice. It’s the beginning of healing. But you have to believe that your voice matters more than your death.”`,
        choices: [
            {
                text: "Let his words settle, then choose to stay",
                next: "leaveMilitary",
            },
            {
                text: "Thank him, but return anyway",
                next: "returnToFront",
            },
        ],
    },
    leaveMilitary: {
        text: `You leave it all behind. But peace doesn't follow. At least not immediately. For every remaining day of the war, you walk through London like a ghost, haunted by the memories of your men and your callous decision to not return. You realize you are no better than the citizens you once scoffed at. You escaped the front, but not the war inside your head.`,
        choices: [{ text: "The end of the war", next: "warEnd" }],
    },
    warEnd: {
        text: `When the war finally ends, you learn that others carried on the fight without you, and still, it ended. Not because of you. Not in spite of you. The war did not need your sacrifice to finish. And somehow, that is enough. Your protest, your refusal to be complicit, remains intact. You begin to forgive yourself. But at the back of your mind is the thought that your men needlessly died and you disregarded their lives.`,
        lesson: "Feelings of regret do not leave easily, especially when blaming yourself is so easy.",
        choices: [],
    },
    serveSilently: {
        text: `Each order you give and follow have their own accompanying doubts. The men trust you. They call you brave. But you know this isn’t bravery, it’s penance. You’ve made the trenches your cross. And you’re waiting to be nailed to it.`,
        lesson: "Obedience wrapped in guilt is not redemption.",
        choices: [],
    },
    withdrawEmotionally: {
        text: `You stop speaking unless necessary. Stop writing. You let the war do what it wants with you. It’s not fear that silences you: it’s resignation. You have become exactly what you fought against: a willing sacrifice.`,
        lesson: "Letting feelings of guilt consume you and guide your actions is not productive. Repentance has faded into numbness, leaving Sassoon empty.",
        choices: [],
    },
};
