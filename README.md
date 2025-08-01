# node-learn-classic

This project is a Node.js migration of the original Classic ASP `learn-classic` application. All features and files have been mapped to their Node.js equivalents.

## Migrated Features
- Session management
- Server variables
- Content sending (plain, JSON, XML, redirect, transfer, execute)
- File system operations (list, read, write, append)
- Forms (GET/POST, with and without validation)
- Database operations (read, write, update)
- Basic language constructs (variables, loops, functions, conditionals, comments, arrays)
- Layouts/partials
- Models
- Static files (CSS, data, SQL)
- Documentation/examples

## File Mapping
- All ASP files have a corresponding route, model, or view in this project.
- All static/data files are in `public/data/`.
- All CSS is in `public/css/`.
- All documentation is in `docs/`.
- All layouts are in `views/partials/`.

## Getting Started
1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Visit http://localhost:3000

---

This file will be updated as migration progresses. 