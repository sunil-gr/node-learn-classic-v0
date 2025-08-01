const express = require('express');
const router = express.Router();

router.get('/read', (req, res) => {
  // Sample countries data matching the learn-classic structure
  const countries = [
    {
      Title: 'United States',
      Code: 'US',
      Capital: 'Washington, D.C.',
      Currencies: 'USD',
      Population: '331,002,651'
    },
    {
      Title: 'United Kingdom',
      Code: 'UK',
      Capital: 'London',
      Currencies: 'GBP',
      Population: '67,886,011'
    },
    {
      Title: 'Germany',
      Code: 'DE',
      Capital: 'Berlin',
      Currencies: 'EUR',
      Population: '83,783,942'
    },
    {
      Title: 'France',
      Code: 'FR',
      Capital: 'Paris',
      Currencies: 'EUR',
      Population: '65,273,511'
    },
    {
      Title: 'Japan',
      Code: 'JP',
      Capital: 'Tokyo',
      Currencies: 'JPY',
      Population: '125,836,021'
    }
  ];
  
  res.render('database-read', { countries });
});

router.get('/write', (req, res) => {
  // Sample posts data
  const posts = [
    {
      Title: 'First Post',
      Content: 'This is the first post content',
      Status: 'published'
    },
    {
      Title: 'Second Post',
      Content: 'This is the second post content',
      Status: 'draft'
    }
  ];
  
  res.render('database-write', { 
    posts,
    titleMessage: '',
    contentMessage: '',
    submitMessage: ''
  });
});

router.post('/write', (req, res) => {
  const { title, content, status, submit } = req.body;
  let titleMessage = '';
  let contentMessage = '';
  let submitMessage = '';
  
  // Validation
  if (!title && submit) {
    titleMessage = 'Please write down the title';
  }
  
  if (!content && submit) {
    contentMessage = 'Please write down the content';
  }
  
  // Sample posts data (in real app, this would come from database)
  const posts = [
    {
      Title: 'First Post',
      Content: 'This is the first post content',
      Status: 'published'
    },
    {
      Title: 'Second Post',
      Content: 'This is the second post content',
      Status: 'draft'
    }
  ];
  
  // If form is valid, add new post
  if (title && content && status && submit) {
    posts.push({
      Title: title,
      Content: content,
      Status: status
    });
    submitMessage = 'success submit new post';
  }
  
  res.render('database-write', { 
    posts,
    titleMessage,
    contentMessage,
    submitMessage
  });
});

router.get('/update', (req, res) => {
  // Sample posts data
  const posts = [
    {
      ID: 1,
      Title: 'First Post',
      Content: 'This is the first post content',
      Status: 'published'
    },
    {
      ID: 2,
      Title: 'Second Post',
      Content: 'This is the second post content',
      Status: 'draft'
    }
  ];
  
  res.render('database-update', { 
    posts,
    idMessage: '',
    titleMessage: '',
    contentMessage: '',
    submitMessage: ''
  });
});

router.post('/update', (req, res) => {
  const { id, title, content, status, submit } = req.body;
  let idMessage = '';
  let titleMessage = '';
  let contentMessage = '';
  let submitMessage = '';
  
  // Validation
  if (!id && submit) {
    idMessage = 'Please enter post ID';
  }
  
  if (!title && submit) {
    titleMessage = 'Please write down the title';
  }
  
  if (!content && submit) {
    contentMessage = 'Please write down the content';
  }
  
  // Sample posts data (in real app, this would come from database)
  const posts = [
    {
      ID: 1,
      Title: 'First Post',
      Content: 'This is the first post content',
      Status: 'published'
    },
    {
      ID: 2,
      Title: 'Second Post',
      Content: 'This is the second post content',
      Status: 'draft'
    }
  ];
  
  // If form is valid, update post
  if (id && title && content && status && submit) {
    const postIndex = posts.findIndex(p => p.ID == id);
    if (postIndex !== -1) {
      posts[postIndex] = {
        ID: parseInt(id),
        Title: title,
        Content: content,
        Status: status
      };
      submitMessage = 'success update post';
    } else {
      submitMessage = 'post not found';
    }
  }
  
  res.render('database-update', { 
    posts,
    idMessage,
    titleMessage,
    contentMessage,
    submitMessage
  });
});

module.exports = router; 