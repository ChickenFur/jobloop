TestFunctions = {
  insertTestData : function (userId){
    JobLoopUsers.insert({
      meteorUserId: userId,
      Applications : [{
        company : "google",
        jobTitle : "SoftwareDev",
        ApplicationNotes : [{
          title: "Note 1",
          content: "I did x today"
          },
          {title: "Note 2",
           content: "I did y today"},
          {title: "Note3",
           content: "I did w today"},]
      },
      { company : "Microsoft",
        jobTitle : "SoftwareDev",
        ApplicationNotes : [{
          title: "Note 1",
          content: "I did x today"
          },
          {title: "Note 2",
           content: "I did y today"},
          {title: "Note3",
           content: "Contents of Note 3"},
           {title: "Note4",
           content: "Contents of Note 4"},
           {title: "Note5",
           content: "Contents of Note 5"},
           {title: "Note6",
           content: "Contents of Note 6"},
           {title: "Note7",
           content: "Contents of Note 7"}]
        },
      {company : "Twitter",
        jobTitle : "SoftwareDev",
        ApplicationNotes : [{
          title: "Note 1",
          content: "I did x today"
          },
          {title: "Note 2",
           content: "I did y today"},
          {title: "Note3",
           content: "Contents of Note 3"},
           {title: "Note4",
           content: "Contents of Note 4"},
           {title: "Note5",
           content: "Contents of Note 5"}]}]
    });
  }
}