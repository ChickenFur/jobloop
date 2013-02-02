TestFunctions = {
  insertTestData : function (userId){
    JobLoopUsers.insert({
      meteorUserId: userId,
      Applications : [{
        company : "google",
        jobTitle : "SoftwareDev",
        ApplicationNotes : [{
          title: "Note 1",
          content: "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes."
          },
          {title: "Note 2",
           content: "Anytime I see something screech across a room and latch onto someone's neck, and the guy screams and tries to get it off, I have to laugh, because what is that thing."},
          {title: "Note3",
           content: "To me, clowns aren't funny. In fact, they're kind of scary. I've wondered where this started and I think it goes back to the time I went to the circus, and a clown killed my dad."},]
      },
      { company : "Microsoft",
        jobTitle : "SoftwareDev",
        ApplicationNotes : [{
          title: "Note 1",
          content: "Most people don't realize that large pieces of coral, which have been painted brown and attached to the skull by common wood screws, can make a child look like a deer."
          },
          {title: "Note 2",
           content: "Sometimes when I feel like killing someone, I do a little trick to calm myself down. I'll go over to the person's house and ring the doorbell. When the person comes to the door, I'm gone, but you know what I've left on the porch? A jack-o-lantern with a knife stuck in the side of its head with a note that says 'You.' After that I usually feel a lot better, and no harm done."},
          {title: "Note3",
           content: "If you ever fall off the Sears Tower, just go real limp, because maybe you'll look like a dummy and people will try to catch you because, hey, free dummy."},
           {title: "Note4",
           content: "If a kid asks where rain comes from, I think a cute thing to tell him is 'God is crying.' And if he asks why God is crying, another cute thing to tell him is 'Probably because of something you did."},
           {title: "Note5",
           content: "One thing kids like is to be tricked. For instance, I was going to take my little nephew to Disneyland, but instead I drove him to an old burned-out warehouse. 'Oh, no,' I said, 'Disneyland burned down.' He cried and cried, but I think that deep down he thought it was a pretty good joke. I started to drive over to the real Disneyland, but it was getting pretty late."},
           {title: "Note6",
           content: "If you go parachuting, and your parachute doesn't open, and you friends are all watching you fall, I think a funny gag would be to pretend you were swimming."},
           {title: "Note7",
           content: "If I could be a bird, I'd be a Flying Purple People Eater because then people would sing about me and I could fly down and eat them because I hate that song."}]
        },
      {company : "Twitter",
        jobTitle : "SoftwareDev",
        ApplicationNotes : [{
          title: "Note 1",
          content: "Instead of studying for finals, what about just going to the Bahamas and catching some rays? Maybe you'll flunk, but you might have flunked anyway; that's my point."
          },
          {title: "Note 2",
           content: "I love to go to the schoolyard and watch the children jump and scream, but they don't know I'm using blanks."},
          {title: "Note3",
           content: "Is there anything more beautiful than a beautiful, beautiful flamingo, flying across in front of a beautiful sunset? And he's carrying a beautiful rose in his beak, and also he's carrying a very beautiful painting with his feet. And also, you're drunk."},
           {title: "Note4",
           content: "To me, it's a good idea to always carry two sacks of something when you walk around. That way, if anybody says, 'Hey, can you give me a hand?' you can say, 'Sorry, got these sacks."},
           {title: "Note5",
           content: "If you're robbing a bank and you're pants fall down, I think it's okay to laugh and to let the hostages laugh too, because, come on, life is funny."}]}]
    });
  }
}