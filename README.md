# Ismail Hossain – Portfolio (React + Vite + Tailwind)

    npm install
    npm run dev      # http://localhost:5173
    npm run build

- Contact form setup (Web3Forms, no backend required):
  1. Create `frontend/.env` from `frontend/.env.example`.
  2. Set `VITE_WEB3FORMS_ACCESS_KEY` to your Web3Forms access key and restart the dev server.
  3. For Netlify, add the same variable under **Project configuration → Environment variables** with the **Builds** and **Production** scopes, then redeploy.
  4. Submit a test from the deployed site and check the verified Web3Forms inbox and its spam folder.
- Sob text/link/skill/project: `src/data/data.jsx` (ekhane-i edit korba)
- Profile photo: `public/images/profile.png` (the hero uses a designed initials fallback if it is missing)
- The frontend works independently from the FastAPI backend. The contact form submits the visitor's name, email, and message to Web3Forms, which delivers it to the inbox configured for the access key.
- Section component: `src/components/` · Pages: `src/pages/` · Routes: `src/Routes.jsx`
- React frontend modules use `.jsx` files; portfolio content lives in `src/data/data.jsx`
- Projects, skills and sample reviews are provided locally from `src/data/data.jsx`
- Edit the sample social profile URLs and testimonials in `src/data/data.jsx` before publishing.
- The portfolio uses a single-page React layout; the resume page can be printed or saved as PDF.
- Profile photo and website icon are stored in `public/images/`
- Service content and certificate details are in `src/data/data.jsx`; certificate images are stored in `public/images/`.
- Custom service illustrations are in `public/images/service-frontend.svg`, `service-backend.svg`, `service-full-stack.svg`, and `service-python.svg`.
