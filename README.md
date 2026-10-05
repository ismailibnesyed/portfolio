# Ismail Hossain – Portfolio (React + Vite + Tailwind)

    npm install
    npm run dev      # http://localhost:5173
    npm run build

- Contact form setup (no backend or extra package required):
  1. Create a free account at https://web3forms.com/ and verify the Gmail inbox where messages should arrive.
  2. Copy your Web3Forms access key and create `frontend/.env` based on `frontend/.env.example`.
  3. Set `VITE_WEB3FORMS_ACCESS_KEY` in `.env` to that access key, then restart `npm run dev`.
  4. For Netlify or Vercel, add `VITE_WEB3FORMS_ACCESS_KEY` as a project environment variable and redeploy.
  5. Submit a test from the deployed site and check the verified inbox and its spam folder.
- The Web3Forms access key is a public client-side identifier, not a private secret. It is included in the built JavaScript; use Web3Forms domain restrictions and spam protections, and never put private credentials in a `VITE_` variable.
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
