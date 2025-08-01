const express = require('express');
const router = express.Router();

router.get('/plain', (req, res) => {
  res.render('sendingcontent-plain');
});

router.get('/json', (req, res) => {
  res.set('Content-Type', 'text/json');
  res.send(`{
    "glossary": {
    "title": "example glossary",
		"GlossDiv": {
      "title": "S",
			"GlossList": {
        "GlossEntry": {
          "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
            "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
          },
					"GlossSee": "markup"
        }
      }
    }
  }
}`);
});

router.get('/xml', (req, res) => {
  res.set('Content-Type', 'text/xml');
  res.send(`<!DOCTYPE glossary PUBLIC "-//OASIS//DTD DocBook V3.1//EN">
 <glossary><title>example glossary</title>
  <GlossDiv><title>S</title>
   <GlossList>
    <GlossEntry ID="SGML" SortAs="SGML">
     <GlossTerm>Standard Generalized Markup Language</GlossTerm>
     <Acronym>SGML</Acronym>
     <Abbrev>ISO 8879:1986</Abbrev>
     <GlossDef>
      <para>A meta-markup language, used to create markup
languages such as DocBook.</para>
      <GlossSeeAlso OtherTerm="GML">
      <GlossSeeAlso OtherTerm="XML">
     </GlossDef>
     <GlossSee OtherTerm="markup">
    </GlossEntry>
   </GlossList>
  </GlossDiv>
 </glossary>`);
});

router.get('/redirect', (req, res) => {
  res.redirect('/basics/conditional');
});

router.get('/transfer', (req, res) => {
  // In Node.js, we can simulate transfer by rendering a different view
  res.render('sendingcontent-transfer');
});

router.get('/execute', (req, res) => {
  // In Node.js, we can simulate execute by rendering a different view
  res.render('sendingcontent-execute');
});

module.exports = router; 