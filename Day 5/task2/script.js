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
    }
  ];
  
  function generateCommentHTML(comment, level) {
    const indentSize = 20; 
    const indent = level * indentSize + "px";
    const container = document.createElement("div");
    container.style.paddingLeft = indent;
    container.classList.add("comment");
    container.innerHTML = comment.text;
  
    comment.replies.forEach(reply => {
      const replyElement = generateCommentHTML(reply, level + 1);
      container.appendChild(replyElement);
    });
  
    return container;
  }
  
  function appendCommentsToDOM(comments) {
    const container = document.getElementById("comments-container");
  
    comments.forEach(comment => {
      if (comment.parentId === null) {
        const commentElement = generateCommentHTML(comment, 0);
        container.appendChild(commentElement);
      }
    });
  }
  
  appendCommentsToDOM(comments);