const quotes = [
 {
        "quote": "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
        "author": "Maya Angelou"
    },
    {
        "quote": "You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.",
        "author": "F. Scott Fitzgerald"
    },
    {
        "quote": "I love you not only for what you are, but for what I am when I am with you.",
        "author": "Roy Croft"
    },
    {
        "quote": "The best thing to hold onto in life is each other.",
        "author": "Audrey Hepburn"
    },
    {
        "quote": "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
        "author": "Leo Christopher"
    },
    {
        "quote": "If I know what love is, it is because of you.",
        "author": "Hermann Hesse"
    },
    {
        "quote": "You're the closest to heaven that I'll ever be.",
        "author": "Goo Goo Dolls"
    },
    {
        "quote": "Whatever our souls are made of, hers and mine are the same.",
        "author": "Emily Brontë"
    },
    {
        "quote": "You make me want to be a better man.",
        "author": "Melvin Udall"
    },
    {
        "quote": "You are my today and all of my tomorrows.",
        "author": "Leo Christopher"
    },
    {
        "quote": "I have found the one whom my soul loves.",
        "author": "Song of Solomon 3:4"
    },
    {
        "quote": "Just in case you ever foolishly forget; I am never not thinking of you.",
        "author": "Virginia Woolf"
    },
    {
        "quote": "To love and be loved is to feel the sun from both sides.",
        "author": "David Viscott"
    },
    {
        "quote": "You had me at 'hello'.",
        "author": "Jerry Maguire"
    },
    {
        "quote": "I love you. You complete me.",
        "author": "Jerry Maguire"
    },
    {
        "quote": "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
        "author": "A. A. Milne"
    },
    {
        "quote": "You are the answer to every prayer I've offered.",
        "author": "Nicholas Sparks"
    },
    {
        "quote": "I would rather share one lifetime with you than face all the ages of this world alone.",
        "author": "J.R.R. Tolkien"
    },
    {
        "quote": "My heart is and always will be yours.",
        "author": "Jane Austen"
    },
    {
        "quote": "To me, you are perfect.",
        "author": "Love Actually"
    },
    {
        "quote": "I'm much more me when I'm with you.",
        "author": "Unknown"
    },
    {
        "quote": "You are my greatest adventure.",
        "author": "The Incredibles"
    },
    {
        "quote": "I have died every day waiting for you. Darling, don't be afraid. I have loved you for a thousand years. I'll love you for a thousand more.",
        "author": "Christina Perri"
    },
    {
        "quote": "I love you more than I have ever found a way to say to you.",
        "author": "Ben Folds"
    },
    {
        "quote": "He's more myself than I am. Whatever our souls are made of, his and mine are the same.",
        "author": "Emily Brontë"
    },
    {
        "quote": "You're the first thing I think of in the morning and the last thing I think of before I go to sleep.",
        "author": "Unknown"
    },
    {
        "quote": "You are the source of my joy, the center of my world and the whole of my heart.",
        "author": "Unknown"
    },
    {
        "quote": "When I tell you I love you, I am not saying it out of habit, I am reminding you that you are my life.",
        "author": "Unknown"
    },
    {
        "quote": "I don’t need paradise because I found you. I don’t need dreams because I have you.",
        "author": "Unknown"
    },
    {
        "quote": "You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",
        "author": "Unknown"
    },
    {
        "quote": "Love is not about how many days, weeks or months you’ve been together, it’s all about how much you love each other every day.",
        "author": "Unknown"
    },
    {
        "quote": "You have bewitched me, body and soul, and I love, I love, I love you.",
        "author": "Jane Austen"
    },
    {
        "quote": "I love you like a fat kid loves cake.",
        "author": "50 Cent"
    },
    {
        "quote": "For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul.",
        "author": "Judy Garland"
    },
    {
        "quote": "I knew the second I met you that there was something about you I needed. Turns out it wasn't something about you at all. It was just you.",
        "author": "Jamie McGuire"
    },
    {
        "quote": "The water shines only by the sun. And it is you who are my sun.",
        "author": "Charles de Leusse"
    },
    {
        "quote": "There is a madness in loving you, a lack of reason that makes it feel so flawless.",
        "author": "Leo Christopher"
    },
    {
        "quote": "We loved with a love that was more than love.",
        "author": "Edgar Allan Poe"
    },
    {
        "quote": "It’s always been you.",
        "author": "F. Scott Fitzgerald"
    },
    {
        "quote": "I wish I’d done everything on Earth with you.",
        "author": "F. Scott Fitzgerald"
    },
    {
        "quote": "You are the one girl that made me risk everything for a future worth having.",
        "author": "Simone Elkeles"
    },
    {
        "quote": "I could watch you for a single minute and find a thousand things that I love about you.",
        "author": "Unknown"
    },
    {
        "quote": "I want to be with you until the sun falls from the sky.",
        "author": "Unknown"
    },
    {
        "quote": "You have me. Until every last star in the galaxy dies. You have me.",
        "author": "Amie Kaufman"
    },
    {
        "quote": "If I had a flower for every time I thought of you, I could walk in my garden forever.",
        "author": "Alfred Tennyson"
    },
    {
        "quote": "You're my favorite place to go when my mind searches for peace.",
        "author": "Unknown"
    },
    {
        "quote": "In a sea of people, my eyes will always search for you.",
        "author": "Unknown"
    },
    {
        "quote": "Your love is all I need to feel complete.",
        "author": "Unknown"
    },
    {
        "quote": "I will love you until the stars go out, and the tides no longer turn.",
        "author": "Unknown"
    },
    {
        "quote": "I could start a fire with what I feel for you.",
        "author": "Unknown"
    },
    {
        "quote": "You are my song. You are my song of love.",
        "author": "Unknown"
    },
    {
        "quote": "I’d choose you; in a hundred lifetimes, in a hundred worlds, in any version of reality, I’d find you and I’d choose you.",
        "author": "Kiersten White"
    },
    {
        "quote": "I still haven't figured out how to sit across from you, and not be madly in love with everything you do.",
        "author": "William C. Hannan"
    },
    {
        "quote": "I'm in love with you, and I'm not in the business of denying myself the simple pleasure of saying true things.",
        "author": "John Green"
    },
    {
        "quote": "I love you. I am at rest with you. I have come home.",
        "author": "Dorothy L. Sayers"
    },
    {
        "quote": "I want all of you, forever, you and me, every day.",
        "author": "Nicholas Sparks"
    },
    {
        "quote": "The story of my life is all about you, my love.",
        "author": "Unknown"
    },
    {
        "quote": "You're the reason I'm breathing, you're the reason I'm still believing, you're the one that's guiding me.",
        "author": "Unknown"
    },
    {
        "quote": "My love for you is a journey; starting at forever and ending at never.",
        "author": "Unknown"
    },
    {
        "quote": "I have loved you in my mind for a thousand years.",
        "author": "Unknown"
    },
    {
        "quote": "I love you past the moon and miss you beyond the stars.",
        "author": "J.M. Storm"
    },
    {
        "quote": "You are the poem I never knew how to write and this life is the story I have always wanted to tell.",
        "author": "Tyler Knott Gregson"
    },
    {
        "quote": "I love you with every beat of my heart.",
        "author": "Armaan"
    },
    {
        "quote": "My night has become a sunny dawn because of you.",
        "author": "Ibn Abbad"
    },
    {
        "quote": "I would find you in any lifetime.",
        "author": "Kanye West"
    },
    {
        "quote": "You are my heart, my life, my entire existence.",
        "author": "Julie Kagawa"
    },
    {
        "quote": "You are my blue crayon, the one I never have enough of, the one I use to color my sky.",
        "author": "A.R. Asher"
    },
    {
        "quote": "I love you, and I will love you until I die, and if there's a life after that, I'll love you then.",
        "author": "Cassandra Clare"
    },
    {
        "quote": "The first time you touched me, I knew I was born to be yours.",
        "author": "Unknown"
    },
    {
        "quote": "I’m not a religious person, but I do sometimes think God made you for me.",
        "author": "Sally Rooney"
    },
    {
        "quote": "I want to be your favorite hello and your hardest goodbye.",
        "author": "Unknown"
    },
    {
        "quote": "I never want to stop making memories with you.",
        "author": "Pierre Jeanty"
    },
    {
        "quote": "You are the sunshine of my life.",
        "author": "Stevie Wonder"
    },
    {
        "quote": "You're the best part of my day.",
        "author": "Unknown"
    },
    {
        "quote": "To the world, you may be one person, but to one person you are the world.",
        "author": "Dr. Seuss"
    },
    {
        "quote": "I love you more than coffee, but please don’t make me prove it.",
        "author": "Elizabeth Evans"
    },
    {
        "quote": "I’ve fallen in love many times… always with you.",
        "author": "Unknown"
    },
    {
        "quote": "You're the peanut butter to my jelly.",
        "author": "Unknown"
    },
    {
        "quote": "I love you more than words can say.",
        "author": "Unknown"
    },
    {
        "quote": "You are my today and all of my tomorrows.",
        "author": "Leo Christopher"
    },
    {
        "quote": "I’m so in love with you, it’s not even funny.",
        "author": "The 1975"
    },
    {
        "quote": "You stole my heart, but I'll let you keep it.",
        "author": "Unknown"
    },
    {
        "quote": "I love you a bushel and a peck.",
        "author": "Doris Day"
    },
    {
        "quote": "You're my person.",
        "author": "Grey's Anatomy"
    },
    {
        "quote": "I love you to the moon and back.",
        "author": "Sam McBratney"
    },
    {
        "quote": "We're a perfect match.",
        "author": "Unknown"
    },
    {
        "quote": "You're my lobster.",
        "author": "Friends"
    },
    {
        "quote": "I'm nuts about you.",
        "author": "Unknown"
    },
    {
        "quote": "You're the one that I want.",
        "author": "Grease"
    },
    {
        "quote": "I'm head over heels for you.",
        "author": "Unknown"
    },
    {
        "quote": "You rock my world.",
        "author": "Unknown"
    },
    {
        "quote": "I'm stuck on you.",
        "author": "Lionel Richie"
    },
    {
        "quote": "You're my everything.",
        "author": "Unknown"
    },
    {
        "quote": "I'm crazy for you.",
        "author": "Madonna"
    },
    {
        "quote": "You're my sunshine on a rainy day.",
        "author": "Unknown"
    },
    {
        "quote": "I'm lost without you.",
        "author": "Blink-182"
    },
    {
        "quote": "You're my better half.",
        "author": "Unknown"
    },
    {
        "quote": "twerk.",
        "author": "Audrina"
    },
    {
        "quote": "You're my dream come true.",
        "author": "Unknown"
    },
    {
        "quote": "I'm all about you.",
        "author": "Unknown"
    }
];
