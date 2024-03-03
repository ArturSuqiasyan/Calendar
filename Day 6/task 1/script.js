const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [] 
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    },

  ];

 
  function generateCommentHTML(comment, nestingLevel) {
    const div = document.createElement('div');
    div.className = 'comment';
    div.style.marginLeft = nestingLevel * 20 + 'px'; 
    div.innerText = comment.text;

    
    if (comment.replies.length > 0) {
      const repliesContainer = document.createElement('div');
      comment.replies.forEach(reply => {
        const replyDiv = generateCommentHTML(reply, nestingLevel + 1);
        repliesContainer.appendChild(replyDiv);
      });
      div.appendChild(repliesContainer);
    }

    return div;
  }

  function appendComments(commentsArray, container, nestingLevel) {
    commentsArray.forEach(comment => {
      if (comment.parentId === null) {
        const commentDiv = generateCommentHTML(comment, nestingLevel);
        container.appendChild(commentDiv);
      }
    });
  }


  const container = document.getElementById('comments-container');
  appendComments(comments, container, 0);