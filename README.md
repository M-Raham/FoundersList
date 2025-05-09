
# 🧑‍💼 FoundersList

FoundersList is a modern directory platform for showcasing startup founders, built with **Next.js (TypeScript)** for the frontend and **Sanity** as the backend CMS. It uses **OAuth-based authentication** to manage secure user access and personalized content.

---

## 🚀 Features

* ⚡️ Blazing fast frontend with Next.js and TypeScript
* 🧠 Headless CMS integration using Sanity.io
* 🔒 Secure login using OAuth (Google, GitHub, etc.)
* 📁 Browse profiles of founders and startups
* 📝 Admin panel (via Sanity Studio) to manage founder data
* 🔍 Search and filtering for better discovery
* 🖼️ Dynamic image rendering and rich text bios

---

## 🛠️ Tech Stack

| Technology                   | Role                                           |
| ---------------------------- | ---------------------------------------------- |
| **Next.js**                  | React-based frontend framework                 |
| **TypeScript**               | Type-safe code and components                  |
| **Sanity.io**                | Headless CMS for content                       |
| **OAuth**                    | Secure authentication (NextAuth.js or similar) |
| **Tailwind CSS**  | Utility-first styling                          |

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/founderslist.git
cd founderslist
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file and configure the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_write_token

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> 🔐 OAuth can also be set up with GitHub or other providers via `next-auth`.

### 4. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the app.

---

## 🧾 Project Structure

```
.
├── components      # Reusable UI components
├── pages           # Next.js pages
├── sanity          # Sanity config and schema files
├── lib             # Utilities (queries, clients)
├── styles          # Global styles
├── public          # Static files (e.g., images)
```

---

## 🧠 Sanity Studio

To launch Sanity Studio (CMS dashboard):

```bash
cd sanity
sanity start
Or visit
localhost:3000/studio
```

You can manage founder profiles, images, and other content here.

---

## 🔒 Authentication

OAuth authentication is handled using [NextAuth.js](https://next-auth.js.org/), supporting multiple providers like Google, GitHub, etc.

---

## 📦 Deployment

You can deploy this project using [Vercel](https://vercel.com/). Make sure to configure all necessary environment variables in the dashboard.

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

