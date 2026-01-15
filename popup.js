// Speed Reader - RSVP Logic with Heatmap & Multiple Texts

// ============================================
// SAMPLE TEXTS (9 total)
// ============================================
const texts = [
  // 1. SHORT (~150 words) - Quick Motivation
  `The gap between where you are and where you want to be is called discipline. Every master was once a disaster. Every expert was once a beginner. The difference is they kept going when others stopped. Your comfort zone is a beautiful place but nothing ever grows there. Stop waiting for the perfect moment and start creating it. The pain of discipline weighs ounces while the pain of regret weighs tons. Champions are not made in gyms or on tracks. Champions are made from something deep inside them - a desire, a dream, a vision. Success is not final and failure is not fatal. What counts is the courage to continue. The only impossible journey is the one you never begin.`,

  // 2. MEDIUM (~400 words) - The Coffee Revolution
  `Coffee changed the world in ways most people never consider. Before coffee became widely available in Europe during the seventeenth century, the standard breakfast drink was beer. People walked around in a mild alcoholic haze from morning until night. Then coffee arrived and suddenly people were alert, focused, and thinking clearly for the first time.

  The coffee house became the birthplace of modern business and democracy. Lloyd's of London started as a coffee house where merchants gathered to discuss shipping insurance. The London Stock Exchange began in Jonathan's Coffee House. Scientists, philosophers, and revolutionaries debated ideas over cups of dark roasted beans. The French Revolution was planned in Parisian cafes. The American Revolution was organized in Boston coffee houses after the famous tea party made the alternative beverage a patriotic choice.

  Coffee fueled the Industrial Revolution. Factory workers needed something to keep them alert during long shifts. Unlike alcohol, coffee sharpened focus and increased productivity. The coffee break became institutionalized, a brief respite that actually made workers more efficient. Today, coffee remains the world's most traded commodity after oil, supporting the economies of dozens of developing nations across Africa, South America, and Southeast Asia.

  The ritual of coffee connects us across cultures and centuries. Whether it's an Italian espresso consumed standing at a bar, a Turkish coffee read for fortunes in the grounds, a Japanese pour-over prepared with ceremonial precision, or an American road trip pit stop, the simple act of brewing and drinking coffee creates moments of pause in our frantic lives. Each cup carries with it five hundred years of history, global trade networks, agricultural science, and human connection.`,

  // 3. MEDIUM-LONG (~600 words) - The Simulation Hypothesis
  `What if everything you've ever experienced is actually a sophisticated computer simulation? This isn't science fiction anymore - it's a serious philosophical and scientific question that some of the world's brightest minds are debating. The simulation hypothesis suggests that our entire universe, including everyone in it, might be an artificial reality created by a more advanced civilization.

  The argument goes something like this. If it's possible for a civilization to create realistic simulations of conscious beings, and if such civilizations would have reasons to run many such simulations, then simple probability suggests we're more likely to be simulated beings than the original biological ones. After all, there would be far more simulated universes than the single original one.

  Consider how far our own video game technology has come in just fifty years. We went from Pong, a few pixels bouncing across a screen, to photorealistic virtual worlds that are becoming increasingly difficult to distinguish from reality. Extrapolate that progress forward a thousand years, or a million. It becomes easy to imagine simulations so perfect that the beings inside them would have no way of knowing they weren't real.

  Some scientists have proposed ways to test the hypothesis. If our universe is a simulation, it might have computational limits - a maximum resolution or processing speed that would create detectable anomalies at the smallest scales. Some researchers claim to have found hints of such limits in the behavior of cosmic rays. Others dismiss these findings as coincidence or misinterpretation.

  The philosophical implications are staggering. If we're in a simulation, what happens when we die? Is there a way to communicate with our creators? Do they watch us, or have they moved on to other projects? Are there multiple simulation levels, turtles all the way down?

  Perhaps most unsettling is the possibility that our simulators could end the program at any moment. Every time you close a video game, countless simulated characters cease to exist. They have no warning, no afterlife, just sudden nonexistence. If we're in a simulation, that same fate could await us.

  Yet there's also something oddly comforting about the simulation hypothesis. It suggests that reality is fundamentally informational, that consciousness and experience matter at the most basic level. It hints at creators who cared enough to build this intricate universe, even if only as an experiment or entertainment. And it reminds us that the nature of reality itself remains one of the great unsolved mysteries of existence.`,

  // 4. LONG (~800 words) - The Psychology of Money
  `Money is the most universal and democratic measure of value in human history, yet our relationship with it is deeply irrational. Understanding the psychology of money reveals more about human nature than any economic textbook ever could. The way people think about wealth, risk, and financial decisions is shaped more by personal history and emotional patterns than by mathematical logic.

  Consider the lottery. The odds of winning a major jackpot are astronomically low, often worse than being struck by lightning twice. Yet millions of people buy tickets every week, happily paying what economists call a stupidity tax. Why? Because the human brain is terrible at processing very small probabilities. We round them up, imagining our chances are better than they actually are. The fantasy of winning feels almost real, and that feeling is worth a few dollars to most people.

  On the flip side, people consistently underestimate the power of compound interest. If you invested just one hundred dollars per month starting at age twenty-five, with an average seven percent annual return, you'd have over a quarter million dollars by age sixty-five. Double the monthly investment and you'd retire a millionaire. The math is straightforward, yet most people never do it. Future rewards feel abstract and distant compared to the immediate pleasure of spending.

  Our perception of wealth is entirely relative, not absolute. A family earning fifty thousand dollars per year feels rich in a community where most earn thirty thousand, but feels poor in a neighborhood of six-figure incomes. The same income produces happiness or misery depending entirely on context. This is why raises and windfalls often fail to improve life satisfaction - we simply adjust our reference point and start comparing ourselves to a wealthier group.

  Loss aversion is perhaps the most powerful force in financial psychology. Research shows that losing one hundred dollars causes roughly twice as much emotional pain as gaining one hundred dollars causes pleasure. This asymmetry explains why people hold onto losing investments too long, hoping to break even rather than accepting a loss. It explains why negotiators sometimes walk away from deals that would benefit them, simply because accepting feels like losing something.

  The wealthy often become trapped by their money in unexpected ways. Having more creates more to lose, more to protect, more to worry about. The fear of losing wealth can be more consuming than the original drive to acquire it. Many rich people report feeling like imposters, convinced their success was luck and could evaporate at any moment. Others become isolated, unable to trust whether people like them or their money.

  Perhaps the most important insight from the psychology of money is that financial decisions are never purely financial. They're tied to our identity, our relationships, our sense of security and self-worth. The person who grew up poor may spend lavishly to prove they've escaped that past, or may hoard obsessively, forever afraid of returning to scarcity. The person who inherited wealth may feel guilty and undeserving, or entitled and superior.

  Understanding these patterns doesn't automatically fix them, but awareness is the first step. The goal isn't to become perfectly rational with money - that's impossible for beings with our evolutionary heritage. The goal is to recognize our biases and build systems that account for them. Automate savings so you don't have to rely on willpower. Create rules that prevent emotional decisions during market volatility. Surround yourself with people who have healthy financial habits.

  Money is a tool, nothing more. It can provide security, opportunity, and freedom. It can also provide anxiety, conflict, and endless comparison. The psychological challenge is to extract the benefits while minimizing the costs, to use money without letting it define your worth as a human being.`,

  // 5. LONG (~850 words) - The Art of Deep Work
  `In an age of constant connectivity, the ability to focus deeply on cognitively demanding tasks has become both increasingly rare and increasingly valuable. Deep work, a term coined by computer science professor Cal Newport, refers to professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. This kind of work creates new value, improves your skills, and is hard to replicate.

  The opposite of deep work is shallow work, the non-cognitively demanding logistical tasks often performed while distracted. Answering emails, attending meetings, filling out forms, scrolling through social media - these activities are easy to do and easy to replicate, which means they don't create much value. Yet most knowledge workers spend the majority of their time on exactly these shallow tasks, leaving little room for the deep work that actually matters.

  The problem is structural. Open office plans make concentration nearly impossible. Slack and email create an expectation of constant availability. Smartphones deliver a stream of notifications engineered to capture attention. The knowledge economy measures presence and responsiveness rather than output and quality. Being busy has become a proxy for being valuable, even when that busyness produces nothing of substance.

  The consequences are severe. Without regular deep work, skills atrophy. Without focused attention, complex problems remain unsolved. Without periods of intense concentration, creative insights never emerge. The most successful people in almost every field - scientists, artists, executives, athletes - are those who have figured out how to protect time for deep work despite all the pressures pushing toward distraction.

  Building a deep work practice requires deliberate strategies. Time blocking is essential - actually scheduling deep work sessions on your calendar and protecting them as seriously as you would protect important meetings. The brain needs predictable rhythms to enter flow states. Random attempts at focus are far less effective than consistent daily practice.

  Environment matters enormously. Working in the same location at the same time each day trains your brain to associate that context with concentration. Removing distractions before starting prevents the willpower depletion of constantly resisting them. Some people need complete silence while others work best with background noise or music, but everyone needs freedom from interruptions.

  The depth of focus is more important than the duration. Four hours of genuine deep work produces more than eight hours of fragmented attention. Most people can sustain only about four hours of deep work per day before mental fatigue sets in. Trying to push beyond this limit often backfires, producing errors and burnout. It's better to work deeply for a shorter period and then genuinely rest than to work shallowly for longer.

  Rituals help the transition into deep work. Some people start with a specific beverage or snack. Others begin with a few minutes of meditation or review of goals. The physicist Richard Feynman would drive to a specific diner, order the same breakfast, and work on his hardest problems. These rituals signal to the brain that it's time to shift gears, reducing the friction of getting started.

  Perhaps most counterintuitively, embracing boredom is essential for deep work. If every moment of potential boredom is filled with phone checking or internet browsing, the brain loses its tolerance for focus. Practicing doing nothing - waiting in line, sitting in a waiting room, commuting without podcasts - rebuilds the capacity for sustained attention. This feels uncomfortable at first but becomes easier with practice.

  The payoff for developing a deep work practice is enormous. Complex skills can be learned in months rather than years. Creative breakthroughs become more frequent. The quality of output improves dramatically. And paradoxically, life feels more satisfying even though work is harder. Flow states are inherently pleasurable, and producing meaningful work provides a sense of purpose that shallow busyness never can.

  The world is dividing into two groups: those who can perform deep work and those who can't. The first group will thrive in the new economy, commanding premium wages and enjoying fulfilling careers. The second group will struggle, their replaceable skills competing with automation and global labor markets. The choice is yours, but the time to start building a deep work practice is now.`,

  // 6. VERY LONG (~1100 words) - The Hidden History of Cryptography
  `Secrets have been protected by codes and ciphers since the dawn of civilization. The history of cryptography is a shadow history of warfare, diplomacy, love, and intrigue, running parallel to the official records but rarely mentioned in textbooks. Understanding this hidden history reveals just how much of human affairs has been shaped by the ability to communicate secretly.

  The ancient Spartans used a device called a scytale, a wooden rod around which a strip of leather was wrapped. When unwound, the leather showed only meaningless letters, but when wrapped around a rod of identical diameter, the message became readable. Only someone with a matching scytale could decode the communication. This simple technology helped coordinate military campaigns across vast distances.

  Julius Caesar developed his own cipher, shifting each letter of the alphabet by three positions. A became D, B became E, and so on. This Caesar cipher seems laughably simple today but was effective against largely illiterate enemies. More importantly, it established the principle that would guide cryptography for millennia: the security of a code should depend on keeping the key secret, not on keeping the method secret.

  The Arab world made enormous advances in cryptography during the Islamic Golden Age. Al-Kindi, a ninth-century polymath, developed the technique of frequency analysis, using the known distribution of letters in a language to crack substitution ciphers. This technique rendered simple substitution codes useless and forced cryptographers to develop more sophisticated methods.

  The Renaissance saw the development of polyalphabetic ciphers, which used multiple substitution alphabets to defeat frequency analysis. The Vigenère cipher, often called "le chiffre indéchiffrable" (the indecipherable cipher), used a keyword to determine which alphabet to use for each letter. It took three centuries before Charles Babbage, the father of computing, developed a reliable method to break it.

  Cryptography played a crucial role in World War One. The Zimmermann Telegram, a secret German communication proposing an alliance with Mexico against the United States, was intercepted and decoded by British intelligence. Its publication helped bring America into the war, changing the course of history. The lesson was clear: control of information could be as decisive as control of territory.

  World War Two elevated cryptography to supreme strategic importance. The German Enigma machine, which used rotating electrical components to create an astronomical number of possible settings, seemed unbreakable. But Polish mathematicians made crucial early breaks, and British code breakers at Bletchley Park, including the legendary Alan Turing, eventually built machines that could crack Enigma messages in time to act on them.

  The Ultra intelligence derived from broken Enigma codes is now believed to have shortened the war by at least two years. Knowing German battle plans in advance allowed the Allies to position forces optimally, reroute convoys away from submarine wolf packs, and prepare defenses against attacks. Tens of millions of lives hung on the ability to read coded messages.

  The Cold War brought cryptography into the nuclear age. Both superpowers invested enormous resources into code making and code breaking. The National Security Agency became the largest employer of mathematicians in the world. Spy satellites, undersea cable taps, and compromised embassy equipment all fed the insatiable appetite for encrypted communications.

  The digital revolution democratized cryptography. What once required state-level resources became available to anyone with a computer. Public key cryptography, developed in the 1970s, solved the ancient problem of key distribution, allowing secure communication between parties who had never met. This technology now underpins all internet commerce, protecting trillions of dollars in transactions.

  Today, encryption is woven into everyday life in ways most people never notice. Every website secured with HTTPS, every message sent through Signal or WhatsApp, every credit card transaction, every Bitcoin transfer relies on mathematical principles developed over centuries of secret warfare. Your smartphone contains cryptographic capabilities that would have been classified top secret just decades ago.

  The eternal contest between code makers and code breakers continues. Quantum computers threaten to break many current encryption schemes, while quantum cryptography promises theoretically unbreakable communications. Governments push for backdoors in encryption while privacy advocates resist. The stakes remain as high as ever, even if the battlefield has moved from parchment to silicon.

  What makes this history remarkable is how often the course of nations turned on the work of anonymous mathematicians and linguists, working in secrecy, their contributions unrecognized for decades. The ability to keep secrets, and to discover others' secrets, has shaped the world as surely as armies and economies. This shadow history continues to unfold, largely invisible, as essential as ever.`,

  // 7. VERY LONG (~1200 words) - The Science of Habit Formation
  `Every action you take is a vote for the type of person you wish to become. This isn't motivational rhetoric but a scientific observation about how habits shape identity over time. Understanding the neuroscience and psychology of habit formation is perhaps the most practical knowledge anyone can acquire, because habits determine the trajectory of your life far more than any single decision.

  The brain is fundamentally a habit machine. Faced with the overwhelming complexity of existence, it constantly seeks to automate routine behaviors, freeing conscious attention for novel challenges. This automation happens in the basal ganglia, an ancient brain region that stores behavioral patterns and triggers them automatically when the right cues appear. Once a habit is encoded there, it requires almost no conscious effort to execute.

  Habits form through a neurological loop consisting of three components: cue, routine, and reward. The cue is a trigger that tells your brain to initiate a behavior. The routine is the behavior itself. The reward is the positive reinforcement that helps your brain remember the loop for the future. Every habit, good or bad, follows this same pattern.

  Consider the habit of checking your phone first thing in the morning. The cue is waking up. The routine is reaching for the phone and scrolling through notifications. The reward is the small dopamine hit from new messages, likes, or information. This loop gets reinforced hundreds of times until it becomes completely automatic. You're not deciding to check your phone anymore; your basal ganglia is executing a stored pattern.

  Breaking bad habits is difficult precisely because of this automaticity. The pattern is literally encoded in your neural architecture. Willpower alone is almost always insufficient because the habit fires faster than conscious intervention can stop it. By the time you've decided not to eat the cookie, your hand is already reaching for it.

  Effective habit change requires working with your brain's wiring rather than against it. The most successful approach is not to eliminate bad habits but to replace them. Keep the cue and reward but substitute a different routine. If stress triggers snacking, keep the stress cue and the comfort reward but replace junk food with a healthier behavior like taking a walk or calling a friend.

  Building new habits requires making them as easy as possible to start. The friction to begin a behavior dramatically affects whether it becomes habitual. Want to exercise in the morning? Sleep in your workout clothes. Want to eat healthier? Prepare meals in advance. Want to read more? Keep a book on your pillow. Every obstacle you remove increases the probability that the behavior will occur.

  Habit stacking is a powerful technique that leverages existing habits as cues for new ones. Rather than trying to remember a new behavior in isolation, attach it to something you already do reliably. After I pour my morning coffee, I will write in my journal for five minutes. After I sit down at my desk, I will review my goals for the day. After I brush my teeth, I will do two minutes of stretching.

  The two-minute rule helps overcome the resistance to starting. Any new habit should take less than two minutes to complete in its initial form. Don't try to meditate for thirty minutes; try to sit quietly for two. Don't try to run five miles; try to put on your running shoes. The point isn't that these tiny habits are valuable in themselves but that they establish the identity of someone who meditates or exercises. Once the basic habit is established, you can expand it.

  Environment design is probably the most underrated factor in habit formation. Your surroundings contain invisible cues that trigger behaviors constantly. Redesigning your environment to make good habits obvious and bad habits invisible is far more effective than relying on willpower. Hide the television remote and leave books on the couch. Put fruits and vegetables at eye level in the refrigerator and hide the junk food. Create a workspace dedicated only to focused work.

  Social environment matters just as much as physical environment. You tend to adopt the habits of the people you spend the most time with. If your friends smoke, you're more likely to smoke. If your colleagues work out, you're more likely to exercise. Joining communities where your desired behavior is the norm provides constant reinforcement and social accountability.

  Habit tracking provides both motivation and feedback. Simply recording whether you completed a habit each day increases the probability that you'll maintain it. The visual evidence of a streak creates psychological pressure not to break it. Tracking also reveals patterns you might otherwise miss, such as conditions that make habits easier or harder to maintain.

  The ultimate goal of habit formation is identity change. You don't want to be someone who is trying to quit smoking; you want to be a non-smoker. You don't want to be someone who forces themselves to exercise; you want to be an athlete. Each time you perform a habit, you're casting a vote for that identity. Enough votes, and the identity becomes self-sustaining.

  This process takes time. Researchers have found that habit formation typically requires anywhere from eighteen to two hundred fifty-four days, with sixty-six days being the average. The variation depends on the complexity of the behavior and the individual. What matters is not perfection but consistency. Missing one day has almost no impact on long-term habit formation; missing two days in a row starts to erode the pattern.

  The compound effect of habits is almost impossible to overstate. Tiny improvements, accumulated over years, lead to remarkable results. Getting one percent better each day makes you thirty-seven times better over a year. The person you will become in five years is largely determined by the habits you build today. This is both encouraging and sobering, because it means your current habits are already shaping your future self.`,

  // 8. SHORT-MEDIUM (~350 words) - The Paradox of Choice
  `Having more options should make us happier, but often it makes us miserable. This is the paradox of choice, one of the most counterintuitive findings in modern psychology. When faced with too many options, we become paralyzed, anxious, and ultimately less satisfied with whatever we choose.

  Consider a famous jam study. Researchers set up sampling tables at a grocery store, one with six varieties of jam and another with twenty-four. More people stopped at the large display, but far fewer actually purchased anything. The small display converted ten times more browsers into buyers. Too much choice overwhelmed people into inaction.

  The problem isn't just deciding; it's living with the decision. When you had few options, you could easily conclude you chose the best available. With many options, there's always the nagging possibility that something better existed among the alternatives you didn't fully consider. This breeds regret and second-guessing.

  Maximizers, people who always seek the best option, suffer most from choice overload. They exhaustively research every possibility, agonize over decisions, and remain dissatisfied even after choosing because they keep wondering about roads not taken. Satisficers, who seek "good enough" rather than optimal, are happier despite often making objectively worse choices.

  The solution isn't to eliminate choice but to manage it. Set standards in advance and stop searching once they're met. Limit options arbitrarily when they exceed what you can meaningfully evaluate. Accept that reversible decisions don't require extensive analysis. Save your decision-making energy for choices that actually matter.

  Modern life offers unprecedented freedom to customize every aspect of existence. But freedom without constraints produces anxiety, not happiness. The happiest people often have fewer choices but more commitment to the choices they've made.`,

  // 9. MEGA LONG (~2200 words) - The Complete Guide to Learning Anything
  `Learning is the fundamental skill that enables all other skills. Those who learn effectively can adapt to any circumstance, master any field, and reinvent themselves repeatedly throughout life. Those who learn poorly are trapped by their existing limitations, unable to grow beyond their current capabilities. Understanding how learning actually works, based on decades of cognitive science research, provides an enormous advantage in our rapidly changing world.

  The brain is not a computer that simply stores information. It's a biological organ that physically changes in response to experience. When you learn something new, neurons form new connections. When you practice something repeatedly, those connections strengthen and become more efficient. When you stop practicing, connections weaken and eventually disappear. Learning is literally construction work happening inside your skull.

  This physical process has important implications. First, learning requires time. Neural connections don't form instantly; they need hours or days to consolidate. This is why cramming is so ineffective for long-term retention. You might pass tomorrow's test, but you won't remember anything a month later. Spacing your study sessions allows each learning episode to build on previously consolidated foundations.

  Second, learning requires effort. Easy activities don't trigger the neural changes necessary for learning. You have to struggle, make mistakes, and push beyond your current abilities. This struggle feels unpleasant, which is why most people avoid it, but it's the essential signal that learning is occurring. If you're not struggling, you're not learning.

  Third, learning requires sleep. Memory consolidation happens primarily during sleep, when the brain replays and strengthens new patterns. Sleep deprivation devastates learning ability, not just during the sleep-deprived period but for days afterward. All-night study sessions produce less learning than shorter sessions followed by good sleep.

  Active recall is the most powerful learning technique known to science. Instead of passively reviewing material, you force yourself to retrieve it from memory. This retrieval effort strengthens memory traces far more than simply re-reading or highlighting. Flashcards, practice tests, and teaching others all leverage active recall. The testing effect, as it's called, produces dramatically better retention than any passive study method.

  Interleaving means mixing different topics or skills during practice rather than focusing on one thing at a time. This feels harder and produces worse performance during practice, which is why most people avoid it. But interleaved practice produces far better retention and transfer to new situations. The struggle of constantly switching gears forces deeper processing and more flexible understanding.

  Spaced repetition optimizes the timing of review sessions. When you first learn something, you should review it after a short interval, perhaps a day. As your memory strengthens, intervals can lengthen to weeks and eventually months. Software like Anki automates this scheduling, presenting each item at the optimal time for reinforcement. Spaced repetition can make memorization several times more efficient than random review.

  Elaboration means connecting new information to things you already know. Rather than trying to memorize facts in isolation, you ask questions like "Why does this make sense?" and "How does this relate to other things I know?" These connections provide multiple retrieval paths to the same information and deeper understanding of its significance. Information that exists in isolation is fragile; information embedded in a rich web of connections is durable.

  Dual coding leverages the brain's separate systems for verbal and visual information. When you combine words with images, diagrams, or spatial arrangements, you create multiple memory traces that reinforce each other. This is why visualizing concepts, drawing diagrams, and using memory palaces can be so effective. Don't just read about something; try to see it.

  The Feynman technique, named after the physicist Richard Feynman, provides a powerful framework for deep learning. First, choose a concept you want to understand. Second, explain it as if teaching a child, using simple language and avoiding jargon. Third, identify gaps in your explanation where you struggled or resorted to complex terms. Fourth, go back to the source material and fill those gaps. Repeat until you can explain the concept simply and completely.

  Deliberate practice differs from regular practice in crucial ways. It focuses specifically on weaknesses rather than comfortable strengths. It involves immediate feedback that allows correction of errors. It requires full concentration rather than mindless repetition. It pushes slightly beyond current ability but not so far as to be impossible. Most people practice the wrong way, simply doing what they can already do, which produces no improvement.

  Mental models are frameworks for understanding how things work. The best learners accumulate many mental models from different fields and apply them across domains. Someone who understands compound interest can apply the same pattern to virus spread, skill development, or relationship building. Someone who understands evolution can see selection pressures in markets, ideas, and technologies. Building a latticework of mental models produces remarkably versatile thinking.

  Transfer is the ability to apply learning from one context to another. This is actually quite difficult; most learning is surprisingly context-specific. Students who master math in the classroom often can't apply it in real-world situations. Transfer requires explicit attention to underlying principles rather than surface features. You have to actively ask how this knowledge could apply elsewhere.

  Mindset matters enormously for learning. Those with a fixed mindset believe abilities are innate and unchangeable. They interpret struggle as evidence of inadequacy and avoid challenges that might expose their limitations. Those with a growth mindset believe abilities are developed through effort. They interpret struggle as evidence of learning and seek challenges as opportunities to improve. Decades of research confirm that growth mindset produces dramatically better outcomes across virtually every domain.

  Motivation and emotion are not separate from cognition but deeply intertwined with it. You learn better when you care about the material, when you feel safe to make mistakes, and when you experience appropriate levels of arousal. Extreme stress shuts down learning, but moderate challenge enhances it. Finding ways to connect material to personal goals and interests isn't a luxury but a necessity for effective learning.

  Teaching others is one of the best ways to learn. It forces you to organize knowledge clearly, identify gaps in understanding, and engage in active recall. The protégé effect refers to the finding that tutors often learn more than their students. Even just expecting to teach changes how you process information, making you pay more attention to structure and relationships.

  Metacognition, or thinking about thinking, allows you to monitor and improve your learning process. Skilled learners constantly ask themselves whether they truly understand or are just familiar, whether their study strategies are working, and whether they need to adjust their approach. This self-awareness is itself a learnable skill that improves with deliberate attention.

  Creating a conducive environment for learning extends beyond removing distractions. It includes establishing consistent routines, managing energy through sleep and exercise, cultivating relationships that support growth, and building systems for capturing and reviewing information. Environment and systems often matter more than willpower or motivation.

  The learning journey never ends. The most accomplished experts remain students throughout their lives, always finding new depths in their fields and new fields to explore. They maintain beginner's mind, staying curious and humble despite their achievements. They know that the more they learn, the more they discover how much remains unknown.

  Ultimately, learning is not just the acquisition of information or skills. It's the transformation of who you are. Each thing you learn expands your capacity to learn more, opening doors to possibilities you couldn't previously imagine. The investment you make in learning compounds over your entire lifetime, paying dividends in every area of existence. There is no better use of your limited time on Earth than becoming a more effective learner.`
];

// ============================================
// STATE
// ============================================
let state = {
  mode: 'idle', // idle | reading | paused | completed
  wpm: 900,
  words: [],
  currentIndex: 0,
  textIndex: 0,
  intervalId: null,
  heatmapOffset: 0 // 0 = current period, -1 = previous, 1 = next
};

// ============================================
// DOM ELEMENTS
// ============================================
const flipInner = document.getElementById('flip-inner');
const flipBtn = document.getElementById('flip-btn');
const flipBtnBack = document.getElementById('flip-btn-back');
const startScreen = document.getElementById('start-screen');
const readingScreen = document.getElementById('reading-screen');
const readBtn = document.getElementById('read-btn');
const wordDisplay = document.getElementById('word-display');
const wordContainer = document.getElementById('word-container');
const progressBar = document.getElementById('progress-bar');
const wordCount = document.getElementById('word-count');
const totalWords = document.getElementById('total-words');
const speedValue = document.getElementById('speed-value');
const diceBtn = document.getElementById('dice-btn');
const heatmapGrid = document.getElementById('heatmap-grid');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const allTotal = document.getElementById('all-total');

// ============================================
// STORAGE FUNCTIONS
// ============================================
const STORAGE_KEY = 'speedreader_sessions';

function getSessions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveSession() {
  const today = new Date().toISOString().split('T')[0];
  const sessions = getSessions();
  sessions[today] = (sessions[today] || 0) + 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  updateHeatmapStats();
}

function getSessionCount(dateStr) {
  const sessions = getSessions();
  return sessions[dateStr] || 0;
}

function getTotalSessions() {
  const sessions = getSessions();
  return Object.values(sessions).reduce((sum, count) => sum + count, 0);
}


// ============================================
// HEATMAP FUNCTIONS
// ============================================
const WEEKS_TO_SHOW = 26; // ~6 months

function getHeatLevel(count) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
}

function renderHeatmap() {
  const heatmapMonths = document.getElementById('heatmap-months');

  // Calculate start date (WEEKS_TO_SHOW weeks ago from current offset)
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - (WEEKS_TO_SHOW * 7) + (state.heatmapOffset * WEEKS_TO_SHOW * 7));

  // Adjust to start of week (Sunday)
  startDate.setDate(startDate.getDate() - startDate.getDay());

  // Clear grid
  heatmapGrid.innerHTML = '';
  heatmapMonths.innerHTML = '';

  // Track months for labels
  let currentMonth = -1;
  let monthStartWeek = 0;
  const monthLabels = [];

  // Generate weeks
  const currentDate = new Date(startDate);

  for (let week = 0; week < WEEKS_TO_SHOW; week++) {
    const weekDiv = document.createElement('div');
    weekDiv.className = 'heatmap-week';

    for (let day = 0; day < 7; day++) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const count = getSessionCount(dateStr);
      const heatLevel = getHeatLevel(count);

      // Track month changes
      if (currentDate.getMonth() !== currentMonth) {
        if (currentMonth !== -1) {
          monthLabels.push({ month: currentMonth, start: monthStartWeek, end: week });
        }
        currentMonth = currentDate.getMonth();
        monthStartWeek = week;
      }

      const dayCell = document.createElement('div');
      dayCell.className = `heatmap-day heat-${heatLevel}`;

      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      dayCell.setAttribute('data-tooltip', `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}: ${count}`);

      weekDiv.appendChild(dayCell);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    heatmapGrid.appendChild(weekDiv);
  }

  // Add final month
  monthLabels.push({ month: currentMonth, start: monthStartWeek, end: WEEKS_TO_SHOW });

  // Render month labels (minimal)
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  monthLabels.forEach(({ month, start, end }) => {
    const weeks = end - start;
    if (weeks >= 2) { // Only show label if month spans at least 2 weeks
      const label = document.createElement('span');
      label.className = 'heatmap-month-label';
      label.textContent = monthNames[month];
      label.style.width = `${weeks * 12}px`; // 10px box + 2px gap
      heatmapMonths.appendChild(label);
    }
  });

  // Update stats
  updateHeatmapStats();
}

function updateHeatmapStats() {
  allTotal.textContent = getTotalSessions();
}

function navigateMonth(delta) {
  state.heatmapOffset += delta;
  renderHeatmap();
}

// ============================================
// FLIP FUNCTIONS
// ============================================
function toggleFlip() {
  flipInner.classList.toggle('flipped');
  if (flipInner.classList.contains('flipped')) {
    renderHeatmap();
  }
}

// ============================================
// TEXT FUNCTIONS
// ============================================
function loadText(index) {
  state.textIndex = index;
  state.words = texts[index].split(/\s+/).filter(word => word.length > 0);
  state.currentIndex = 0;
  totalWords.textContent = state.words.length;
  wordCount.textContent = '0';
  progressBar.style.width = '0%';
}

function loadRandomText() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * texts.length);
  } while (newIndex === state.textIndex && texts.length > 1);

  loadText(newIndex);

  // Reset to start screen if not reading
  if (state.mode === 'completed' || state.mode === 'idle') {
    state.mode = 'idle';
    startScreen.classList.remove('hidden');
    readingScreen.classList.add('hidden');
    readingScreen.classList.remove('paused', 'completed');
  }

  // Animate dice
  diceBtn.classList.add('spinning');
  setTimeout(() => diceBtn.classList.remove('spinning'), 500);
}

// ============================================
// READING FUNCTIONS
// ============================================
function getORPIndex(word) {
  const cleanWord = word.replace(/[^a-zA-Z]/g, '');
  const len = cleanWord.length;

  if (len <= 1) return 0;
  if (len <= 5) return Math.floor(len / 2) - 1;
  if (len <= 9) return 2;
  if (len <= 13) return 3;
  return 4;
}

function renderWord(word) {
  if (!word) {
    wordDisplay.innerHTML = '';
    return;
  }

  const orpIndex = getORPIndex(word);
  const before = word.substring(0, orpIndex);
  const orp = word.charAt(orpIndex);
  const after = word.substring(orpIndex + 1);

  wordDisplay.innerHTML = `<span class="before">${before}</span><span class="orp">${orp}</span><span class="after">${after}</span>`;
}

function startReading() {
  state.mode = 'reading';
  state.currentIndex = 0;

  startScreen.classList.add('hidden');
  readingScreen.classList.remove('hidden');
  readingScreen.classList.remove('paused', 'completed');

  showNextWord();
  startTimer();
}

function showNextWord() {
  if (state.currentIndex >= state.words.length) {
    completeReading();
    return;
  }

  const word = state.words[state.currentIndex];
  renderWord(word);

  const progress = ((state.currentIndex + 1) / state.words.length) * 100;
  progressBar.style.width = `${progress}%`;
  wordCount.textContent = state.currentIndex + 1;

  state.currentIndex++;
}

function startTimer() {
  if (state.intervalId) {
    clearInterval(state.intervalId);
  }

  const delay = 60000 / state.wpm;
  state.intervalId = setInterval(() => {
    if (state.mode === 'reading') {
      showNextWord();
    }
  }, delay);
}

function togglePause() {
  if (state.mode === 'reading') {
    state.mode = 'paused';
    readingScreen.classList.add('paused');
    clearInterval(state.intervalId);
  } else if (state.mode === 'paused') {
    state.mode = 'reading';
    readingScreen.classList.remove('paused');
    startTimer();
  } else if (state.mode === 'completed') {
    startReading();
  }
}

function completeReading() {
  state.mode = 'completed';
  clearInterval(state.intervalId);
  readingScreen.classList.add('completed');
  wordDisplay.innerHTML = '<span class="orp">Done!</span>';

  // Save session to localStorage
  saveSession();
}

// ============================================
// SPEED CONTROL
// ============================================
function handleScroll(event) {
  event.preventDefault();

  const oldWpm = state.wpm;
  const delta = event.deltaY > 0 ? -50 : 50;
  const newWpm = Math.min(1500, Math.max(100, state.wpm + delta));

  if (newWpm !== oldWpm) {
    state.wpm = newWpm;
    updateSpeedDisplay(oldWpm, newWpm);

    if (state.mode === 'reading') {
      startTimer();
    }
  }
}

function updateSpeedDisplay(oldValue, newValue) {
  const direction = newValue > oldValue ? 'up' : 'down';
  const oldStr = oldValue.toString().padStart(4, ' ');
  const newStr = newValue.toString().padStart(4, ' ');

  let html = '';

  for (let i = 0; i < newStr.length; i++) {
    const oldChar = oldStr[i];
    const newChar = newStr[i];

    if (oldChar === newChar) {
      html += `<span class="speed-digit-wrapper"><span class="speed-digit">${newChar === ' ' ? '&nbsp;' : newChar}</span></span>`;
    } else {
      html += `<span class="speed-digit-wrapper" data-old="${oldChar}" data-new="${newChar}" data-direction="${direction}"><span class="speed-digit">${newChar === ' ' ? '&nbsp;' : newChar}</span></span>`;
    }
  }

  speedValue.innerHTML = html;

  requestAnimationFrame(() => {
    const wrappers = speedValue.querySelectorAll('.speed-digit-wrapper[data-old]');
    wrappers.forEach(wrapper => {
      const digit = wrapper.querySelector('.speed-digit');
      const dir = wrapper.dataset.direction;
      const newChar = wrapper.dataset.new;

      digit.classList.add(dir === 'up' ? 'exit-down' : 'exit-up');

      setTimeout(() => {
        digit.textContent = newChar === ' ' ? '\u00A0' : newChar;
        digit.classList.remove('exit-up', 'exit-down');
        digit.classList.add('enter');

        setTimeout(() => {
          digit.classList.remove('enter');
        }, 150);
      }, 100);
    });
  });
}

// ============================================
// KEYBOARD HANDLER
// ============================================
function handleKeydown(event) {
  if (event.code === 'Space') {
    event.preventDefault();
    if (state.mode === 'idle') {
      startReading();
    } else {
      togglePause();
    }
  }

  if (event.code === 'ArrowUp') {
    event.preventDefault();
    handleScroll({ deltaY: -1, preventDefault: () => {} });
  }
  if (event.code === 'ArrowDown') {
    event.preventDefault();
    handleScroll({ deltaY: 1, preventDefault: () => {} });
  }
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
  // Load initial text
  loadText(0);

  // Event listeners - Reading
  readBtn.addEventListener('click', startReading);
  wordContainer.addEventListener('click', togglePause);
  document.addEventListener('wheel', handleScroll, { passive: false });
  document.addEventListener('keydown', handleKeydown);

  // Event listeners - Flip
  flipBtn.addEventListener('click', toggleFlip);
  flipBtnBack.addEventListener('click', toggleFlip);

  // Event listeners - Dice
  diceBtn.addEventListener('click', loadRandomText);

  // Event listeners - Heatmap navigation
  prevMonthBtn.addEventListener('click', () => navigateMonth(-1));
  nextMonthBtn.addEventListener('click', () => navigateMonth(1));

  // Initialize displays
  updateSpeedDisplay(state.wpm, state.wpm);
  updateHeatmapStats();
}

document.addEventListener('DOMContentLoaded', init);
