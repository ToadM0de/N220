const decision1 =
  prompt(`You're lost. Branches twist into mazes and steps turn into becking cries to whaever is out there. It's silent. It hears those cries it Knows you're there. What will you do?
    \n 1. Stand my ground. Whatever is coming, I can handle it
    \n 2. Run, nothing out here has gained my trust`);

if (decision1 === "1") {
  const decision1 =
    prompt(`You freeze, barely able to breathe, waiting for the presence to leave. Birds start chirping and frogs croaking. It left. Collapsing from relief, you realize the state you're in. When was the last time you ate or drank anything? 
        \n 1. Follow the chirping of the birds. I could catch them for food
        \n 2. Follow the croaking of the frogs. Where there's frogs, there's water.`);

  if (decision1 === "1") {
    const decision1 =
      prompt(`Branches started to thin and grass grew taller. An opening appears, lined with plants with a watering hole in the middle. Bushes overflow with berries in the distance. This is a safe haven
        \n 1. Set up camp. Nowhere else is as safe as here
        \n 2. Leave. something seems off about this place`);
    if (decision1 === "1") {
      const decision1 = confirm(
        `Sprinting, you go to devour the fruit. It seems like ages since you've had a meal, but there's something wrong. Collapsing from weakness, you start to wheeze. They were poisonous. Everything fades while your body shuts down. Something eats you the next day`
      );
    } else {
      const decision1 = confirm(
        `After leaving, you wander the woods. Time no longer exists, everything is the same, the seasons wouldn't change either. Slowly, you get used to the layout and set up camp in a remote area. You've giving up and decided to live there until your eventual death`
      );
    }
  } else {
    const decision1 = prompt(
      `The air is heavy and smells putrid, filled with the quiet hum of mosquitos. In front of you lays a swamp. Disapointed, you turn around to head back when something catches your attention. A hulking mass lays low in the muck, some sort of fish like creature."I an elp ya, I know out. otta answer me first. Hold the tail ile I fish for ya. What am I? (one word, no spaces or caps)"`
    );

    if (decision1 === "net") {
      const decision1 = confirm(
        `"Good job kid. Come ere so I am elp." Cautiously, you approach the creature. It gulps you whole. You're stuck in his throat, thrashing around trying to escape, when it spits you out. "so much for a thanks." Disheveled but still alive,you look around. It's the edge of the forest. He actually helped you. Tears fall down your face as you stumble out of the trees. You've made it.`
      );
    } else {
      const decision1 = confirm(
        `"I'm sorry kid, that just ain't right." Best not to trust him anyways. Continuing on your way, something snatched you from behind. It was his tongue. Before you know what's going on, you're swallowed whole`
      );
    }
  }
} else {
  const decision1 =
    prompt(`Running is futile, it hunts by sound. There's slithering under the leaves, no, the leaves are WRIGGLING. Your ankles, they disapear underneath the movement, trapping you.
        \n 1. Tear at the leaves, they should be fragile enough to break
        \n 2. Accept my fate. Maybe it will be more forgiving if I don't resist`);

  if (decision1 === "1") {
    const decision1 =
      prompt(`SHOULD be, yet, tearing through them feels like digging into the flesh of a swine. The leaves slowly melt into one, releasing a low creaking noise, like an old willow in the wind. It seems to be in pain. Is it.... crying?
        \n 1. A wild beast wouldn't react like this, maybe it's friendly?
        \n 2. Continue fighting, I'm doing some form of damage if it's crying`);

    if (decision1 === "1") {
      const decision1 = confirm(
        `You stopped and questioned the creature's reaction. Slowly, a form appears from the leaves. It shifts around, examining you, yet, it has no eyes. Leaves start climbing up your legs, embracing you in a hug. They feel... scared... and hungry. It's lost. lost just like me. You decide to stick with the creature through the woods, hoping to find home together`
      );
    } else {
      const decision1 = confirm(
        `A thick, brown substance starts to count the bottom of your nails. Creaking turns into whistling while the leaves climb up, quickly absorbing you. Bones crack while the skin slowly melts. You can't scream, its too tight to breathe. Nothing is left but a chunky pulp.`
      );
    }
  } else {
    const decision1 =
      prompt(`There's no escaping now. You collapse expecting your demise, yet, the leaves caught you. Forming from the pile is a creature. It seems hesitant, maybe its scared? or maybe making a plan? This could be your chance to live
        \n 1. Escape while it's distracted, there's a chance.
        \n 2. Wait, I don't think it will hurt me`);

    if (decision1 === "1") {
      const decision1 = confirm(
        `Quickly, you try and escape the pile, but can't move. The leaves have you in a tight grasp. The movement alerts the creature, forcing it to make a decision. The pile absorbs you. Bones crack while the skin slowly melts. You can't scream, its too tight to breathe. Nothing is left but a chunky pulp. `
      );
    } else {
      const decision1 = confirm(
        `It shifts around, examining you, yet, it has no eyes. Leaves start climbing up your legs, embracing you in a hug. They feel... scared... and hungry. It's lost. lost just like me. You decide to stick with the creature through the woods, hoping to find home together`
      );
    }
  }
}
