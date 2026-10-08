# Client website code archive (branch `archive-client-code`)
Snapshot of `~/Desktop/websites ARCHIVE` taken 2026-10-09 (the `~/Desktop/websites` folder is a symlink to it).
Excluded on purpose: `node_modules`, `dist`, `.git`, `.vercel`, `.venv`, every `.env*` / `*.local` file (they hold secrets; re-create from the password manager), `.DS_Store`.
Restore: `rsync -a client-code/websites-ARCHIVE/ "$HOME/Desktop/websites ARCHIVE/"`, then `npm install` inside each project.
Note: `business-card-crm/src/firebase.js` holds a Firebase web config (public by design, but keep this repo private).
Postcards also lives in its own repo (disojo-solutions/postcards-perfumes-web); Ascender and Mochi have no other remote yet.
