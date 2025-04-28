storyData.koenigswald = {
    start: {
        text: `You wash your hands. Again. Always again. The House of Hope and Mercy reeks of the slow rot of island disease. You move through the ward, checking pulses, offering hope to the sick. You tell yourself this matters. That maybe enough acts of kindness can dilute a history soaked in cruelty.`,
        choices: [
            {
                text: `Tend to the worst cases first. They deserve your time. You desire their time.`,
                next: `tendWorst`,
            },
            {
                text: `Avoid the dying and focus on the treatable.`,
                next: `treatableOnly`,
            },
            {
                text: `Reflect on your past. Remember what you did.`,
                next: `rememberPast`,
            },
        ],
    },
    tendWorst: {
        text: `You kneel by a child burning with pneumonia. He cannot speak your language, but his eyes understand pain. You've seen these same eyes hundreds of times before; the memories sting like old wounds. You do what you can, sponging the sweat, adjusting the dose, murmuring apologies he’ll never hear. He dies before morning.  
You keep working. You're not working to save them. You're working to save yourself.`,
        choices: [
            { text: `Continue working in silence`, next: `quietWork` },
            { text: `Confess to a colleague`, next: `confessColleague` },
        ],
    },
    treatableOnly: {
        text: `You choose the patients you know you can help. Efficiency, you tell yourself. But each success feels thin, empty. You know, deep down, you just want to offset your sins of the past. The sick praise you, though. They don’t know who you used to be. That this kindness is borrowed, not born.`,
        choices: [
            {
                text: `Break down and admit your guilt to a colleague`,
                next: `confessColleague`,
            },
            { text: `Return to the worst cases after all`, next: `tendWorst` },
        ],
    },
    rememberPast: {
        text: `It comes back in fragments. The camps. The trains. The clipboard in your hand, the silence in your heart. You weren’t the worst, but you were there. And being there was enough.  
Now you count doses instead of bodies. But the math is the same: one life. Then another. Then another. The numbers don’t end. Neither does the guilt. You get the feeling that no matter how much good you do now, it will take a thousand years to even begin tipping the scales of your sins.`,
        choices: [
            { text: `Try to forget again`, next: `quietWork` },
            { text: `Confess to a colleague`, next: `confessColleague` },
            {
                text: `Give in to the futility of your efforts to repent`,
                next: `quitJob`,
            },
        ],
        quote: `If he keeps going at his present rate, working night
and day, the number of people he’s saved will equal the number of people he let die—in the year 3010 (Vonnegut, 153).`,
    },
    quietWork: {
        text: `You become a machine. Wake, work, wash, repeat. No more thoughts. No more memory. The ward becomes your penance. The patients become your jury. You act as if each patient saved forgives one of the innocent victims you callously let go years back. You wonder if this is what redemption looks like: not peace, but perpetual motion. You've learned there is no such thing as writing the wrongs of history - the wrongs are set in stone. However, there does exist moving forward and doing good everyday, not as a form of repentance, but as a product of learning from the past.`,
        lesson: `Good deeds cannot directly cancel out the evils of the past. One can, however, learn from the past to avoid making the same mistakes.`,
        choices: [],
    },
    confessColleague: {
        text: `You tell them. Not everything, but just enough. “I don’t know what to say,” they whisper.  
You nod. That’s fair.  
They don’t speak of it again. But something in their eyes shifts when they look at you.  
You keep working. But you feel more like a ghost now than before.`,
        choices: [
            {
                text: `Let it fade and keep working`,
                next: `quietWork`,
            },
            {
                text: `Leave. You cannot keep pretending this helps`,
                next: `quitJob`,
            },
        ],
    },
    quitJob: {
        text: `You hang up your coat. Wash your hands one last time. The others don’t stop you. Maybe they don’t know. Maybe they do.  
You walk away from the House of Hope and Mercy with no plans, only weight. You thought staying would bring peace, and, yet, it did not. But leaving brings no clarity either.  
There is no undoing the past. And there is no peace in its shadow. Only the long, cold honesty of living with it.`,
        lesson: `The past always lives with you, no matter what. Walking away from your responsibilities due to feelings of guilt will not alleviate said guilt.`,
        choices: [],
    },
};
