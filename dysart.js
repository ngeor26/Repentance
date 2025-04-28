storyData.dysart = {
    start: {
        text: `You sit across from Alan. Again. The boy’s eyes are filled with a truth you’ll never fully grasp, wild and sacred. You’re meant to pull him back to “normal,” to strip away his “Equus” and his “Field of Ha-Ha” and return him to the gray monotony of the world.  
But you hesitate. You see the dullness waiting on the other side of healing. And for once, you wonder if madness might be more human than health.`,
        choices: [
            {
                text: "Continue the sessions. Do what you were trained to do.",
                next: "continueSessions",
            },
            {
                text: "Confess your doubts to Hesther",
                next: "confessHesther",
            },
            {
                text: "Break protocol and let Alan speak without restraint",
                next: "letAlanSpeak",
            },
        ],
        quote: `I'll take away his Field of Ha Ha, and give
him Normal places for his ecstasy (Shaffer, 109).`,
    },
    continueSessions: {
        text: `You guide him. Gently, carefully, like removing a thorn from a child’s skin. But you’re not healing, you’re disassembling. You know that. The thorn is so deep that pulling it out is damaging. 
Alan begins to change. He smiles more, asks about sports. You nod and pretend to celebrate.  
But inside, you mourn the loss of something sacred.`,
        choices: [
            {
                text: "Tell Alan what you really think before he leaves",
                next: "truthToAlan",
            },
            {
                text: "Swallow your regret and move to the next patient",
                next: "moveOn",
            },
        ],
    },
    confessHesther: {
        text: `“I’m taking away the one thing that gave his life meaning,” you say. “And I’m doing it in the name of sanity.”  
Hesther sighs. “You’re saving him.”  
You shake your head. “No. I’m making him like us.”  
She doesn’t respond.  
And in the silence, your repentance deepens, not because of what you’ve done, but because you know you’ll do it again. You know you must do it again. That’s your job.`,
        choices: [
            { text: "Return to the sessions", next: "continueSessions" },
            {
                text: "Consider leaving psychiatry altogether",
                next: "considerLeaving",
            },
        ],
    },
    letAlanSpeak: {
        text: `You stop interrupting. You stop guiding. You finally let him speak.
His voice shakes. His stories twist with thrill and passion and. You’re horrified. You’re moved.
And when he’s done, he looks at you; not for permission, but for understanding.`,
        choices: [
            {
                text: "You can't give it to him. Begin the cure anyway",
                next: "continueSessions",
            },
            {
                text: "You give him the understanding he deserves. Let him go without treatment",
                next: "letHimGo",
            },
        ],
    },
    truthToAlan: {
        text: `“What you had was real,” you tell him. “And strange. And beautiful. I wish I didn’t have to take it from you.”  
Alan blinks. Then he nods. He even smiles. He is clearly without pain. 
He walks out into the world you dragged him toward. You wonder if he’ll ever find anything holy in it again.`,
        choices: [
            {
                text: "You can't live with what you've done to Alan. Quit psychiatry.",
                next: "quitProfession",
            },
            {
                text: "No matter your personal beliefs, it is your job to restore people to a productive state. Keep going with psychiatry",
                next: "moveOn",
            },
        ],
    },
    moveOn: {
        text: `You treat the next patient. And the next. You perform your role with efficiency; it’s what you’re famous for.  
But something in you grows quiet. Something vital.  
Your repentance becomes a ritual: not of apology, but of repetition. You break what’s beautiful so others don’t have to see it. You prepare them to be tolerated by a world that can’t handle difference. You pretend that’s mercy.`,
        lesson: "Repentance that is not acted upon can lead to further guilt. No attempts to break out of the cycle will mean suffering under its effects.",
        choices: [],
    },
    considerLeaving: {
        text: `“I can't reconcile myself to a world where passion is pathologized,” you tell Hesther. “Where healing means sanding down the soul until it fits some pre-approved mold. To tell you the truth, I feel for the boy. Maybe too much. And I don't think I can remain party to the dehumanization acts we psychiatrists specialize in.”`,
        choices: [
            {
                text: "Stay anyway. You're too deep in the system to leave now.",
                next: "moveOn",
            },
            {
                text: "Leave the profession. Let someone else do the 'fixing.'",
                next: "quitProfession",
            },
            {
                text: "Ask Alan what he wants. Maybe the boy's voice should finally matter.",
                next: "letAlanSpeak",
            },
        ],
    },
    letHimGo: {
        text: `You let him walk. No cure. No reintegration. No therapy. Just Alan, as he is.  
You watch him disappear beyond the hospital walls, carrying his madness proudly. Who knows whether he’ll go on to blind six more horses; you almost hope he will.
You tell yourself it’s mercy.  
But deep down, you know it’s cowardice, too. And that knowledge stays with you. Long after he’s gone.`,
        lesson: "Repentance is not always healing. Even acting on your feelings of guilt can leave mental scars, especially when the guilt is the product of internal conflict.",
        choices: [],
    },
    quitProfession: {
        text: `You hand in your resignation. The others are surprised. You were respected. Effective.  
But your own soul is tired. You’ve stopped believing that conformity is salvation.  
For the first time in a long while, you feel like a man rather than a machine. But at what cost?`,
        lesson: "Though you acted on Dysart's feelings of guilt, the outcome is still bleak. Sometimes, it is better to continue by discarding the guilt.",
        choices: [],
    },
};
